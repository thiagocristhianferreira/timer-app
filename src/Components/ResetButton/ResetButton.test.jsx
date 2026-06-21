import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ResetButton from './ResetButton';

describe('ResetButton', () => {
  test('renderiza o botão de reset', () => {
    render(<ResetButton reset={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Reset');
  });

  test('chama reset ao clicar', () => {
    const reset = vi.fn();
    render(<ResetButton reset={reset} />);
    fireEvent.click(screen.getByRole('button'));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
