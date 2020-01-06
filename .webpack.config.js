// define child rescript
module.exports = config => {
    config.target = 'electron-renderer';
    return config;
  }

  loaders: [
    {
      test: /\.(?:png|jpg|svg)$/,
      loader: 'url-loader',
      query: {
        // Inline images smaller than 10kb as data URIs
        limit: 10000
      }
    }
  ]