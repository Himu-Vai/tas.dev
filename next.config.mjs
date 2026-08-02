/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tas.dev",
  assetPrefix: "/tas.dev/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
