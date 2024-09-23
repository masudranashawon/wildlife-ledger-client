/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/uploads/**", // Correct for local development
      },
      {
        protocol: "https",
        hostname: "wildlife-ledger-server.onrender.com",
        pathname: "/uploads/**", // Correct for production
      },
    ],
  },
};

// Exporting the ES module configuration
export default nextConfig;
