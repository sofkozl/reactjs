import React from 'react';

import { ChatsRender } from '../Chats';
import { render } from '@testing-library/react';

describe('Chats presentation component', () => {
  it('matches snapshot', () => {
    const component = render(<ChatsRender />);

    expect(component).toMatchSnapshot();
  })
})