import * as React from 'react';
import { Tag } from 'rct';

export default () => {
  return <div>
    <Tag>无</Tag>
    <Tag type="success">成功</Tag>
    <Tag type="warning">警告</Tag>
    <Tag type="error">错误</Tag>
    <Tag type="secondary">次要的</Tag>
    <Tag type="lite">精简的</Tag>
  </div>
}