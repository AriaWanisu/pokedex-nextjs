/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    // reactStrictMode: true,
    // assetPrefix: isProd ? "/pokedex-nextjs/" : "",
  },
};

module.exports = nextConfig;
