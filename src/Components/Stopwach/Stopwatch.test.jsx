import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import Stopwatch from './Stopwatch';

describe('Stopwatch', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    act(() => vi.runOnlyPendingTimers());
    vi.useRealTimers();
  });

  test('inicia em 25 segundos', () => {
    render(<Stopwatch />);
    expect(screen.getByText(/Tempo da Atividade: 25 s/)).toBeInTheDocument();
  });

  test('decrementa o tempo a cada segundo', () => {
    render(<Stopwatch />);
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByText(/Tempo da Atividade: 22 s/)).toBeInTheDocument();
  });

  test('pausa o contador ao clicar em Pause', () => {
    render(<Stopwatch />);
    act(() => vi.advanceTimersByTime(2000)); // 23 s
    fireEvent.click(screen.getByText('Pause'));
    act(() => vi.advanceTimersByTime(5000)); // não deve avançar
    expect(screen.getByText(/Tempo da Atividade: 23 s/)).toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  test('volta para 25 segundos ao clicar em Reset', () => {
    render(<Stopwatch />);
    act(() => vi.advanceTimersByTime(5000)); // 20 s
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText(/Tempo da Atividade: 25 s/)).toBeInTheDocument();
  });

  test('exibe a mensagem de fim ao zerar o tempo', () => {
    render(<Stopwatch />);
    act(() => vi.advanceTimersByTime(25000));
    expect(screen.getByText(/Tempo da Atividade: 0 s/)).toBeInTheDocument();
    expect(screen.getByText(/Seu tempo acabou/)).toBeInTheDocument();
  });
});
