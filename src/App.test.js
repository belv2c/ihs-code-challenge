import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Albums from './components/albums';

const acceptableRenderTime = 1000;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the IHS Markit Code Challenge!/i); // TODO: This initial test is not passing. I think it was left over from the boilerplate. Switching the text to something that can be found on the working app.
  expect(linkElement).toBeInTheDocument();
});

describe('render albums', () => {
  render(<Albums />);
  const albums = document.querySelector('div.container');
  const button = document.querySelector('div.container button');

  test('default album is Revolver by The Beatles', () => {
    expect(albums).toHaveTextContent("The Beatles");
    expect(albums).toHaveTextContent("Revolver");
  });

  test('after a button click, the album is Pet Sounds by The Beach Boys', async () => {
    userEvent.click(button);
    setTimeout(() => {
      expect(albums).toHaveTextContent("The Beach Boys");
      expect(albums).toHaveTextContent("Pet Sounds");
    }, acceptableRenderTime)
  })
})
