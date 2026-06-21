import { render, screen } from '@testing-library/react';
import Audio from './Audio';

describe('Audio', () => {
  test('mostra a mensagem de contagem enquanto há tempo', () => {
    render(<Audio seconds={10} />);
    expect(screen.getByText(/tempo já está contando/i)).toBeInTheDocument();
  });

  test('mostra a mensagem de fim e o player quando o tempo acaba', () => {
    const { container } = render(<Audio seconds={0} />);
    expect(screen.getByText(/Seu tempo acabou/)).toBeInTheDocument();
    expect(container.querySelector('audio')).toBeInTheDocument();
  });

  test('toca o áudio ao zerar o tempo', () => {
    render(<Audio seconds={0} />);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
