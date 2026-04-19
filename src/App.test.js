import { render, screen } from '@testing-library/react';
import App from './App';

test('Page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});


test('Leran Jenkins.. link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Jenkins on Udemy/i);
  expect(linkElement).toBeInTheDocument();
});
