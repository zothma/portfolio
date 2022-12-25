/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  env: {
    DATEBUILD: new Date()
  },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    if (isServer) {
      import('./scripts/sitemap-generator.mjs');
    }

    return config;
  },

  async redirects() {
    return [
      {
        source: "/joyeux-noel",
        destination: "https://youtu.be/dQw4w9WgXcQ",
        permanent: false
      }
    ]
  }
}
