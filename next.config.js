/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para Vercel com static export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@fortawesome/react-fontawesome'],
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Minify CSS
      config.optimization.minimizer.push(
        new (require('css-minimizer-webpack-plugin'))({
          minimizerOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
