import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
describe('the app component', () => {

    beforeEach(
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([{ title: "test product", description: "a thing", price: 999 }]),
                ok: true,
            })
        )
    )

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

    describe('NavBar', () => {
        it('renders logo', () => {
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            );

            expect(
                screen.getByText(/Favorite/i)
            ).toBeInTheDocument();
        });
    });

    describe('ProductList', () => {
        it('renders products', async () => {
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            );

            await screen.findByText(/Add to Cart/i)
        });
    });
})
