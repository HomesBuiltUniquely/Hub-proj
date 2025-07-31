import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yzmnmgrkugecsfnsmhib.supabase.co",
        pathname: "/storage/v1/object/public/**", // Match Supabase image paths
      },
      {
        protocol: "https",
        hostname: "tgqcnyhwjfretjmnlmaq.supabase.co",
        pathname: "/storage/v1/object/public/**",
      }
    ],
  },
};

export default nextConfig;
