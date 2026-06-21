import { render, screen } from '@testing-library/react';
import Header from './Header';

test('exibe o título POMODORO', () => {
  render(<Header />);
  expect(screen.getByRole('heading', { name: /pomodoro/i })).toBeInTheDocument();
});
