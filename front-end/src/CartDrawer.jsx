// CartDrawer.jsx
import React from "react";
import styles from "./CartDrawer.module.css";
import { Link } from "react-router-dom";

function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  subtotal = 0,
  onDecreaseQty,
  onIncreaseQty,
  onRemoveFromCart,
}) {
  if (!isOpen) return null;

  const formatMoney = (n) =>
    Number(n || 0).toLocaleString("en-US", { //When n is undefined, error ought to be raised (generalize)
      style: "currency",
      currency: "USD",
    });

  const stop = (e) => e.stopPropagation();

  return (
    <div className={styles["cart-overlay"]} onClick={onClose}>
      <aside className={styles["cart-drawer"]} onClick={stop}>
        <div className={styles["cart-drawer__top"]}>
          <h2 className={styles["cart-drawer__title"]}>Your Cart</h2>
          <button
            className={styles["cart-drawer__close"]}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className={styles["cart-drawer__body"]}>
          {cartItems.length === 0 ? (
            <>
              <p className={styles["cart-drawer__empty"]}>Your cart is empty.</p>

              {/* Checkout at bottom even when empty */}
              <div className={styles["cart-drawer__summary"]}>
                <div className={styles["cart-drawer__row"]}>
                  <span>Subtotal</span>
                  <strong>{formatMoney(0)}</strong>
                </div>
                <Link to="/checkout" className={styles["cart-drawer__checkout"]} disabled title="Add items to cart to checkout">
                  Checkout
                </Link>
              </div>
            </>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className={styles["cart-item"]}>
                  <div className={styles["cart-item__info"]}>
                    <p className={styles["cart-item__name"]}>{item.title}</p>
                    <p className={styles["cart-item__price"]}>
                      {formatMoney(item.price)}
                    </p>
                  </div>

                  <div className={styles["cart-item__controls"]}>
                    {/* Quantity stepper */}
                    <div className={styles.qtyStepper}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => onDecreaseQty && onDecreaseQty(item.id)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span className={styles.qtyValue}>{item.qty}</span>

                      <button
                        className={styles.qtyBtn}
                        onClick={() => onIncreaseQty && onIncreaseQty(item)}
                        aria-label="Increase quantity"
                        disabled={!onIncreaseQty}
                        title={
                          !onIncreaseQty ? "Wire up onIncreaseQty to enable" : ""
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className={styles["cart-item__remove"]}
                      onClick={() =>
                        onRemoveFromCart && onRemoveFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Summary and Checkout at bottom */}
              <div className={styles["cart-drawer__summary"]}>
                <div className={styles["cart-drawer__row"]}>
                  <span>Subtotal</span>
                  {formatMoney(subtotal)}
                </div>
                <Link to="/checkout" onClick={onClose} className={styles["cart-drawer__checkout"]}>
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
