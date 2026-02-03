import styles from "./OrderSummary.module.css";
import { Link } from "react-router-dom"
import { addDays } from "date-fns";

function OrderSummary({ cartItems = [], subtotal = 0, setCartItems, showPlaceOrder = true }) {
    const formatMoney = (n) =>
        Number(n || 0).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

    // Hardcoded values for tax and shipping
    const taxRate = 0.08;
    const tax = +(subtotal * taxRate).toFixed(2);
    const shipping = 0;
    const total = +(subtotal + tax + shipping).toFixed(2);

    const arrivalDate = addDays(new Date(), 5)

    return (
        <aside className={styles.summaryCard}>
            {!showPlaceOrder && (
                <div className={styles.orderInfo}>
                    <p>
                        Order Number: #87654
                    </p>
                    <p>
                        Est. Delivery Date: {" "}
                        {arrivalDate.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        })}
                    </p>
                </div>
            )}

            <h2 className={styles.title}>Order Summary</h2>
            {cartItems.length === 0 ? (
                <p className={styles.emptyText}>
                    Your cart is empty. <Link to="/">Go add items</Link>.
                </p>
            ) : (
                <>
                    <div className={styles.items}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={styles.itemRow}>
                                <div>
                                    <div className={styles.itemName}>{item.title}</div>
                                    <div className={styles.itemQty}>
                                        Qty: {item.qty}
                                    </div>
                                </div>
                                <div className={styles.itemPrice}>
                                    {formatMoney(item.price * item.qty)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.totals}>
                        <div className={styles.totalRow}>
                            <span>Subtotal</span>
                            <span>{formatMoney(subtotal)}</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span>Tax (8%)</span>
                            <span>{formatMoney(tax)}</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <div className={styles.totalRowStrong}>
                            <span>Total</span>
                            <span>{formatMoney(total)}</span>
                        </div>
                    </div>
                    {showPlaceOrder && (
                        <Link to="/confirm" className={styles.placeOrderBtn}>
                            Place Order
                        </Link>
                    )}
                    <div className={styles.secureNote}>
                        🔒 Secure checkout
                        <div className={styles.secureSubtext}>Your payment information is encrypted</div>
                    </div>
                </>
            )}
        </aside>
    );
}

export default OrderSummary;