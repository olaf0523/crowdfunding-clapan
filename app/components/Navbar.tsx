// Navbar.tsx
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./ui/logo";
import DesktopLinks from "./nav/DesktopLinks";
import DesktopButtons from "./nav/DesktopButtons";
import MobileMenu from "./nav/MobileBurgerMenu";
import MobileDropdown from "./nav/MobileDropdown";

type NavbarProps = {
  theme?: "dark" | "light";
  background?: "invisible" | "color";
};

const Navbar: React.FC<NavbarProps> = ({
  theme = "light",
  background = "invisible",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Colors based on theme
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const iconFill = theme === "dark" ? "white" : "black";

  // Backgrounds based on prop
  const bgClass =
    background === "color"
      ? "bg-[#FFFFFF]" // You can change to your desired bg color
      : "bg-none";

  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full ${bgClass}   shadow-sm h-20`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Logo theme={theme} iconFill={iconFill} />
          <DesktopLinks
            iconFill={iconFill}
            theme={theme}
            textColor={textColor}
          />
          <DesktopButtons
            iconFill={iconFill}
            theme={theme}
            pathname={pathname}
          />
          <MobileMenu
            iconFill={iconFill}
            theme={theme}
            pathname={pathname}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
      {isOpen && <MobileDropdown textColor={textColor} theme={theme} />}
    </nav>
  );
};

export default Navbar;
