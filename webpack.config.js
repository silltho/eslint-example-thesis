const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const entry = './index.js'

const defaultConfig = {
  entry,
  mode: 'development',
  output: {
    filename: 'dist/default/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015']]
        }
      }
    ]
  }
}

const defaultMinifiedConfig = {
  entry,
  mode: 'production',
  output: {
    filename: 'dist/default/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015']]
        }
      }
    ]
  },
  plugins: [new UglifyJSPlugin()]
}

const es6ModulesConfig = {
  entry,
  mode: 'development',
  output: {
    filename: 'dist/es6-modules/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { loose: true, modules: false }]]
        }
      }
    ]
  }
}

const es6ModulesMinifiedConfig = {
  entry,
  mode: 'production',
  output: {
    filename: 'dist/es6-modules/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { loose: true, modules: false }]]
        }
      }
    ]
  },
  plugins: [new UglifyJSPlugin()]
}

module.exports = [
  defaultConfig,
  defaultMinifiedConfig,
  es6ModulesConfig,
  es6ModulesMinifiedConfig
]
