module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      { pattern: 'karma.test-context.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'karma.test-context.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel' }
        ]
      },
      watch: true,
      resolve: {
        modulesDirectories: [ 'node_modules', 'src' ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha']
  })
}
