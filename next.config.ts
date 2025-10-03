import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This allows you to use SVGs with the next/image component.
    dangerouslyAllowSVG: true, 
    
    // The recommended way to allow external images.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**', // Allows all paths from this domain
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;