// next.config.mjs
import withSvgr from "next-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "www.marketresearchandnews.com",
      },
    ],
  },
};

export default withSvgr(nextConfig);
