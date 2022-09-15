<<<<<<< HEAD
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> 3b49628ce301ef633e92d1faa6b624df6d933430
import App from './App';

test('renders learn react link', () => {
  render(<App />);
<<<<<<< HEAD
  const linkElement = screen.getByText(/learn chakra/i);
=======
  const linkElement = screen.getByText(/learn react/i);
>>>>>>> 3b49628ce301ef633e92d1faa6b624df6d933430
  expect(linkElement).toBeInTheDocument();
});
