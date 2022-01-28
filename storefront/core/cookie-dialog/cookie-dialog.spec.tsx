import React from 'react';
import { render } from '@testing-library/react';
import { BasicCookieDialog } from './cookie-dialog.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCookieDialog />);
  const rendered = getByText('hello from CookieDialog');
  expect(rendered).toBeTruthy();
});
