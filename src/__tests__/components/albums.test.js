import { render, screen } from '@testing-library/react';
import Albums from '../../components/albums';

test('renders the album component', () => {
  render(<Albums />);
  const headerElement = screen.getByText(/Challenge 1: Switch Albums/i);
  expect(headerElement).toBeInTheDocument();
});
