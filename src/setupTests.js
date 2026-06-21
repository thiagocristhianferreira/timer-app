// jest-dom adiciona matchers customizados para asserções em nós do DOM,
// permitindo coisas como: expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// jsdom não implementa HTMLMediaElement.play(); o stub evita erros nos testes
// que renderizam o player de áudio.
window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
