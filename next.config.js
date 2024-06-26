module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wallpapers.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
        },
      ],
    },
    serverRuntimeConfig: {
      // Other server runtime configs...
      middleware: ['./app/middleware.ts'],
    }
  }