import { Link } from "react-router-dom";
import styles from "./ConfirmationPage.module.css"
import OrderSummary from "./OrderSummary.jsx";

function ConfirmationPage({ cartItems = [], subtotal = 0, setCartItems }) {
    const clearCart = function () {
        setCartItems([])
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.check}>
                    ✓
                </div>
                <h1 className={styles.confirm}>
                    Order Confirmed!
                </h1>

                <OrderSummary cartItems={cartItems} subtotal={subtotal} showPlaceOrder={false} />

                <Link className={styles.backLink} to="/" onClick={clearCart}>
                    Back to Shopping
                </Link>
            </div>
        </div>
    )
}

export default ConfirmationPage;