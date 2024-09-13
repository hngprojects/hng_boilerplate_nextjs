import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      { hostname: "res.cloudinary.com", protocol: "https" },
      { hostname: "res.cloudinary.com", protocol: "http" },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default withNextIntl(nextConfig);
