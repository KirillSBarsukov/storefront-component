import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogin } from './login.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLogin />);
  const rendered = getByText('hello from Login');
  expect(rendered).toBeTruthy();
});
