// /** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.resolve('./src/styles/index.scss');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
    EVENT_ID: process.env.EVENT_ID
  },
  images: {
    unoptimized: true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'lodmedia.hb.bizmrg.com',
            port: '',
            pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'runet-id.com',
            port: '',
            pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 's3-profile.rsv.ru',
            port: '',
            pathname: '**',
        },
    ],
},
}
