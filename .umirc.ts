const extraBabelPlugins = [
  ["styled-jsx/babel", { "optimizeForSpeed": true }]
];

export default {
  title: 'rct',
  outputPath: '.doc',
  exportStatic: {},
  extraBabelPlugins,
};
