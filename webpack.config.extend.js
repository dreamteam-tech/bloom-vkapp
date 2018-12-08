const babelPackages = require('./scripts/babelPackages');

module.exports = (webpackConfig, env, { paths }) => {
  return babelPackages(webpackConfig);
};
