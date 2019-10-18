module.exports = [require.resolve('./.webpack.config.js')]

// define child rescript
module.exports = config => {
  config.target = 'electron-renderer';
  return config;
}