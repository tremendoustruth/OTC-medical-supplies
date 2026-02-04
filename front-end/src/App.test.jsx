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

    describe('Footer', () => {
        it('renders copyright', () => {
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            );

            expect(
                screen.getByText(/All rights reserved/i)
            ).toBeInTheDocument();
        });
    });

    describe('ProductList', () => {
        it('renders products', async () => {
            // global.fetch = vi.fn(() =>
            //     Promise.resolve({
            //         json: () => Promise.resolve([{ title:"test product",description:"a thing",price:999 }]),
            //         ok: true,
            //     })
            // );
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            );

            await screen.findByText(/Add to Cart/i)
        });
    });
})
