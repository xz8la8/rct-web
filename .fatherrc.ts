const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

const extraBabelPlugins = [
  'styled-jsx/babel'
]

export default {
  entry: 'src/index.ts',
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  umd: {
    globals,
    name: 'rct'
  },
  runtimeHelpers: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
  extraBabelPlugins,
};
