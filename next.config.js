/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  output: "export",
};

module.exports = nextConfig;
