import _JSXStyle from 'styled-jsx/style';

// 开发模式启动解决方案：https://triplecore.io/blog/next-typescript-storybook/
if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle })
}