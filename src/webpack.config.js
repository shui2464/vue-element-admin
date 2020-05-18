const path = require('path')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': resolve('src')
    }
  }
}