import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yzmnmgrkugecsfnsmhib.supabase.co",
        pathname: "/storage/v1/object/public/**", // Match Supabase image paths
      },
    ],
  },
};

export default nextConfig;
