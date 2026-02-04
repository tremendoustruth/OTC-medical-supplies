import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NavBar from './NavBar';

describe('the NavBar component', () => {

    beforeEach(
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([{ title: "test product", description: "a thing", price: 999 }]),
                ok: true,
            })
        )
    )

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
    describe('cart button', () => {
        it('can be clicked', () => {
            const onClickMock = vi.fn();
            const { getByText } = render(
                <MemoryRouter>
                    <NavBar label="🛒" onCartClick={onClickMock} />
                </MemoryRouter>
            )
            const button = getByText('🛒')
            fireEvent.click(button)
            expect(onClickMock).toHaveBeenCalledTimes(1)
        })
    })
})
