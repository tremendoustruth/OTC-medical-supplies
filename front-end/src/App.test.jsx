import { describe, it, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});

describe('App', () => {
    it('renders headline', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(
            screen.getByText(/Welcome to MediSupply!/i)
        ).toBeInTheDocument();
    });
});
