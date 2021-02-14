import * as React from 'react';
import { Tag } from 'rct';

export default () => {
  return <div>
    <Tag invert>无</Tag>
    <Tag invert type="success">成功</Tag>
    <Tag invert type="warning">警告</Tag>
    <Tag invert type="error">错误</Tag>
    <Tag invert type="secondary">次要的</Tag>
    <Tag invert type="lite">精简的</Tag>
  </div>
}