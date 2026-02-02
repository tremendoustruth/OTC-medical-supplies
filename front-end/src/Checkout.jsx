
import ShippingCard from "./ShippingCard.jsx"
import OrderSummary from "./OrderSummary.jsx"
import Payment from "./Payment.jsx"
import styles from "./Checkout.module.css"
import { Link } from "react-router-dom";

function Checkout({ cartItems = [], subtotal = 0, cartCount = 0, setCartItems }) {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Checkout</h1>
            <Link className={styles.backLink} to="/">
                ← Back to Shopping
            </Link>
            <div className={styles.layout}>
                {/* left column */}
                <div className={styles.left}>
                    <ShippingCard />
                    <Payment />
                </div>

                {/* right column */}
                <div className={styles.right}>
                    <OrderSummary
                        cartItems={cartItems}
                        subtotal={subtotal}
                        cartCount={cartCount}
                        setCartItems={setCartItems}
                    />
                </div>
            </div>
        </div>
    );
}


export default Checkout;
