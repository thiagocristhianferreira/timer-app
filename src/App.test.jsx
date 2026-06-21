import { render, screen } from '@testing-library/react';
import App from './App';

test('exibe a tela de loading inicialmente', () => {
  render(<App />);
  const loadingImage = screen.getByAltText(/loading/i);
  expect(loadingImage).toBeInTheDocument();
});
