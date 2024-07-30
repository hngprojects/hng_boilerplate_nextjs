/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      { hostname: "ui-avatars.com", protocol: "https" },
      { hostname: "res.cloudinary.com", protocol: "http" },
    ],
  },
};

export default nextConfig;
