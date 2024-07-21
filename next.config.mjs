export default {
  images: {
    domains: ['w.wallhaven.cc'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://wallhaven.cc/api/v1/:path*',
      },
    ];
  },
};
