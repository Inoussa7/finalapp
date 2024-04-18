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

    // Ignore the optional dependencies of the `mongodb` package
    config.externals = config.externals || {};
    config.externals['@mongodb-js/zstd'] = 'commonjs @mongodb-js/zstd';
    config.externals['kerberos'] = 'commonjs kerberos';
    config.externals['mongodb-client-encryption'] = 'commonjs mongodb-client-encryption';

    // Handle .node files
    config.module.rules.push({
      test: /\.node$/,
      loader: 'file-loader',
    });

    return config;
  },
};

export default nextConfig;
