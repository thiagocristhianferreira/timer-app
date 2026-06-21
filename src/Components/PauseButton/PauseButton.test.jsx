import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import PauseButton from './PauseButton';

describe('PauseButton', () => {
  test('mostra "Pause" quando o contador está ativo', () => {
    render(<PauseButton isActive={true} toggle={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Pause');
  });

  test('mostra "Start" quando o contador está inativo', () => {
    render(<PauseButton isActive={false} toggle={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Start');
  });

  test('chama toggle ao clicar', () => {
    const toggle = vi.fn();
    render(<PauseButton isActive={false} toggle={toggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
