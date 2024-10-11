/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/drgxflcsb/image/upload/**",
      },
    ],
  },
};

// Exporting the ES module configuration
export default nextConfig;
