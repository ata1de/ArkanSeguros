/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/9.x/**',
      },
    ],
  },
  webpack: (config) => {
    config.output = {
      ...config.output,
      chunkLoadTimeout: 30000, // 30 segundos
    };
    return config;
  },
};

export default nextConfig;
