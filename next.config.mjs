/** @type {import('next').NextConfig} */
import svg from '@neodx/svg/webpack';

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["image.tmdb.org"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          group: true,
          root: 'components/shared/icon/assets',
          output: 'public/sprite',
          resetColors: false,
          metadata: 'components/shared/icon/sprite.h.ts',
        })
      );
    }
    return config;
  },
};

export default nextConfig;
