import { render, screen } from '@testing-library/react';
import Counter from '../../components/counter';

test('renders the counter component', () => {
  render(<Counter />);
  const headerElement = screen.getByText(/Challenge 2: Counter/i);
  expect(headerElement).toBeInTheDocument();
});
