import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the IHS Markit Code Challenge!/i); // TODO: This initial test is not passing. I think it was left over from the boilerplate. Switching the text to something that can be found on the working app.
  expect(linkElement).toBeInTheDocument();
});
