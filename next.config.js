const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const webpack = require('webpack')
const withImages = require('next-images')

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[name]___[hash:base64:5]'
  }
}

const nextConfiguration = {
  pageExtensions: ['js', 'md'],
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc')
      })
    )
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/technology': { page: '/technology' },
      '/process': { page: '/process' },
      '/token': { page: '/token' },
    }
  }
}
module.exports = withPlugins([
  [withSass, sassConfig],
  withImages
], nextConfiguration)
