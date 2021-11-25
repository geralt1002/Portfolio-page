module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio-page/' : '/',
  pwa: {
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png',
    },
  },
}
