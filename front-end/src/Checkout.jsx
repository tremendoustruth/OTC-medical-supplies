
import ShippingCard from "./ShippingCard.jsx"
import OrderSummary from "./OrderSummary.jsx"

function Checkout({ cartItems = [], subtotal = 0, cartCount = 0 }) {
    return <>
        <h1>Checkout Page: Under Construction</h1>;
        <ShippingCard />
        <OrderSummary cartItems={cartItems} subtotal={subtotal} cartCount={cartCount} />
    </>

}

export default Checkout;
