import { render, screen } from '@testing-library/react';
import Mapp from './Mapp';
// import App from './App';

test('renders learn react link', () => {
  render(<Mapp/>)
  // render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
