const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '_c': resolve('src/components')
    }
  }
}