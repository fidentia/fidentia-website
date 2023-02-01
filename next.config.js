/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 630, 768, 1024, 1600],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.prismic.io'
      }
      

    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
