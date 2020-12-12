import { render, screen } from '@testing-library/react';
import Toggle from '../../components/toggle';

test('renders the toggle component', () => {
  render(<Toggle />);
  const headerElement = screen.getByText(/Challenge 3: Toggle/i);
  expect(headerElement).toBeInTheDocument();
});
