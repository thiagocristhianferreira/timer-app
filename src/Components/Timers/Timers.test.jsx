import { render, screen } from '@testing-library/react';
import Timers from './Timers';

test('renderiza os tempos da atividade e da questão', () => {
  render(
    <Timers
      seconds={20}
      secondsPartial={3}
      count={1}
      percent={80}
      percentPartial={60}
    />
  );

  expect(screen.getByText(/Tempo da Atividade: 20 s/)).toBeInTheDocument();
  expect(screen.getByText(/Questão: 3 s/)).toBeInTheDocument();
});
