import styles from "./OrderSummary.module.css";
import { Link } from "react-router-dom"

function OrderSummary({ cartItems = [], subtotal = 0 }) {
    const formatMoney = (n) =>
        Number(n || 0).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

    // Hardcoded values for tax and shipping
    const taxRate = 0.08;
    const tax = subtotal * taxRate;
    const shipping = 0;
    const total = subtotal + tax + shipping;

    return (
        <aside className={styles.summaryCard}>
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
                    <Link to="/confirm" className={styles.placeOrderBtn}>
                        Place Order
                    </Link>
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