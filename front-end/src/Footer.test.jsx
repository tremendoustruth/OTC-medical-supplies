import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
describe('the Footer component', () => {
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
})
