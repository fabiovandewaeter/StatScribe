// src/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/Counter';

test('affiche le compteur initial à 0 et l\'incrémente quand on clique', () => {
    render(<Counter />);
    const counterDisplay = screen.getByText(/0/i);
    expect(counterDisplay).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);

    // On s'attend à ce que le compteur affiche 1 après le clic
    expect(screen.getByText(/1/i)).toBeInTheDocument();
});
