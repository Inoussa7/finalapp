// next.config.mjs
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        path: false,
        os: false,
        vm: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        zlib: false,
        dns: false,
      };
    }

    return config;
  },
};

export default nextConfig;