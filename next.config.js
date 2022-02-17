/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  externals: {
    _http_common: 'commonjs2 _http_common'
  },
  images: {
    domains: [
      'https://res.cloudinary.com/'
    ]
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      config.externals.push('_http_common')
    }
    return config
  }
}
