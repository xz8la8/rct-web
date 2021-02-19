const extraBabelPlugins = [
  ["styled-jsx/babel", { "optimizeForSpeed": true }]
];

export default {
  title: 'rct',
  outputPath: '.doc',
  exportStatic: {},
  extraBabelPlugins,
  publicPath: process.env.NODE_ENV === 'production' ? '/rct-web/' : '/'
};
