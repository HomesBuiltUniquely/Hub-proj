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
        hostname: "luylvbilvdxntquphldh.supabase.co",
        pathname: "/storage/v1/object/public/**", // Match Supabase image paths
      },
       {
        protocol: "https",
        hostname: "urmwhawodjntegbbmnls.supabase.co",
        pathname: "/storage/v1/object/public/**", // Match Supabase image paths
      },
      {
        protocol: "https",
        hostname: "tgqcnyhwjfretjmnlmaq.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/k2xcrgitcr/**',
      }
    ],
  },
};

export default nextConfig;
