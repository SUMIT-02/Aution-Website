/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-08e2f66dcec44da3b3d3d7f569c22435.r2.dev",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
