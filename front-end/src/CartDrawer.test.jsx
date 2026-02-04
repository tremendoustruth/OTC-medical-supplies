import { beforeEach, describe, expect, it, vi } from 'vitest'
import CartDrawer from './CartDrawer.jsx'
import CheckOut from './Checkout.jsx'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from "./App.jsx"

const target = "This is the checkout."

vi.mock(import('./CheckOut.jsx'), () => (
    <div>
        {target}
    </div>
))
const props = {
    isOpen: true,
    onClose: vi.fn(),
    onDecreaseQty: vi.fn(),
    onIncreaseQty: vi.fn(),
    onRemoveFromCart: vi.fn(),
}

describe("CartDrawer", () => {

    describe('checkout button', () => {
        it('should navigate to the checkout page', async () => {
            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )
            const cartButton = screen.getByText('🛒')
            fireEvent.click(cartButton)
            const checkOutButton = await screen.findByText('Checkout')
            fireEvent.click(checkOutButton)
            await screen.findAllByText('Expiration*')
        })
    })
})