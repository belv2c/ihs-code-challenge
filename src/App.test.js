import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const jsdomAlert = window.alert;
window.alert = () => { };

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the IHS Markit Code Challenge!/i); // TODO: This initial test is not passing. I think it was left over from the boilerplate. Switching the text to something that can be found on the working app.
  expect(linkElement).toBeInTheDocument();
});

describe('album works', () => {
  beforeEach(async () => {
    render(<App />);
    await waitFor(() => {
      expect(document.body).toContainElement(document.querySelector('.Album'));
    })
  });

  test('default album is Revolver by The Beatles', async () => {
    const album = document.querySelector('.Album');
    expect(album).toHaveTextContent("The Beatles");
    expect(album).toHaveTextContent("Revolver");
  });

  test('after a button click, the album is Pet Sounds by The Beach Boys', async () => {
    const album = document.querySelector('.Album');
    userEvent.click(document.querySelector('div.container button'));

    await waitFor(() => {
      expect(document.body).toContainElement(document.querySelector('.Album'));
    })

    expect(album).toHaveTextContent("The Beach Boys");
    expect(album).toHaveTextContent("Pet Sounds");
  })
});

describe('counter works', () => {
  beforeEach(async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("+")).toBeInTheDocument();
    })
  });

  test('add button works', async () => {
    const addButton = screen.getByText("+");
    userEvent.click(addButton);

    await waitFor(() => {
      expect(document.body).not.toHaveTextContent("Count is: 0");
    })

    expect(document.body).toHaveTextContent("Count is: 1");
  });

  test('substract button works', async () => {
    const substractButton = screen.getByText("-");
    userEvent.click(substractButton);

    await waitFor(() => {
      expect(document.body).not.toHaveTextContent("Count is: 0");
    })

    expect(document.body).toHaveTextContent("Count is: -1");
  });
});

describe('toggle works', () => {
  beforeEach(async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/the cute sloth/i)).toBeInTheDocument();
    })
  });

  test('toggle hides image and shows image', async () => {
    userEvent.click(screen.getByText(/Remove.*?/i));

    await waitFor(() => {
      expect(document.body).not.toHaveTextContent(/Remove.*?/i);
    });

    expect(screen.queryByAltText('Sloth')).toBeNull();

    userEvent.click(screen.getByText(/Show.*?/i));

    await waitFor(() => {
      expect(document.body).not.toHaveTextContent(/Show.*?/i);
    })

    expect(screen.queryByAltText('Sloth')).not.toBeNull();
  });
});

window.alert = jsdomAlert;
