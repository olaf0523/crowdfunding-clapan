import Link from "next/link";

interface props {
  textColor: string;
  theme: string;
}

export default function MobileDropdown({ textColor, theme }: props) {
  return (
    <div
      className={`lg:hidden shadow-lg border-t-1 border-gray-200/70 px-4 py-3 space-y-3 ${
        theme === "dark" ? "bg-[#1D2635]/70 backdrop-blur-sm" : "bg-white/100"
      }`}
    >
      <Link
        href="#"
        className={`block text-center ${textColor} hover:text-red-600 `}
      >
        ホーム
      </Link>
      <Link
        href="#"
        className={`block text-center ${textColor} hover:text-red-600 mt-5 `}
      >
        プロジェクト
      </Link>
      <Link
        href="#"
        className={`block text-center ${textColor} hover:text-red-600 mt-5 `}
      >
        動画一覧
      </Link>
      <div className="flex flex-col space-y-2 pt-3 ">
        <button className="bg-white border border-gray-400 text-gray-800 text-sm font-semibold rounded-full px-5 py-2 hover:bg-gray-100 transition-colors">
          Get Start
        </button>
        <button className="bg-primary border border-red-600 text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-red-700 transition-colors">
          ログイン
        </button>
      </div>
    </div>
  );
}
