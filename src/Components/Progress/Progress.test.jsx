import { render, screen } from '@testing-library/react';
import Progress from './Progress';

describe('Progress', () => {
  test('exibe a porcentagem arredondada', () => {
    render(<Progress done={42.6} bc="green" />);
    expect(screen.getByText('43%')).toBeInTheDocument();
  });

  test('exibe 0% quando concluído', () => {
    render(<Progress done={0} bc="#282c34" />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });
});
