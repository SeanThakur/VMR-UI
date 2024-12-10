// next.config.mjs
import withSvgr from "next-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "www.verifiedmarketreports.com",
      },
      {
        hostname: "www.marketresearchandnews.com",
      },
      {
        hostname: "www.opal-rt.com",
      },
      {
        hostname: "www.elock.com",
      },
      {
        hostname: "www.starchemindia.in",
      },
      {
        hostname: "www.cumi-murugappa.com",
      },
    ],
  },
};

export default withSvgr(nextConfig);
