import React from 'react';
import { mount, render } from 'enzyme';
import Text from '..';

describe('Text', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Text />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('snapshot', () => {
    const wrapper = render(<Text />);

    expect(wrapper).toMatchSnapshot();
  })
});
