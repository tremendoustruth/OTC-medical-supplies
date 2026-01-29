import { useState } from "react"; // React hook for component state
import { useNavigate } from "react-router-dom"; // Used to navigate between pages
import PropTypes from "prop-types"; // Optional: validates props

import logo from "./assets/medisupplysymbol.jpeg"; // MediSupply logo image
import styles from "./NavBar.module.css"; // Import CSS module for styling

function NavBar({ cartCount }) {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const goHome = () => navigate("/");

  const handleCheckout = () => {
    closeCart();
    navigate("/confirmation");
  };

  return (
    <>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          {/* Logo */}
          <button className={styles.logoButton} onClick={goHome}>
            <img
              src={logo}
              alt="MediSupply logo"
              className={styles.logoImg}
            />
            <div className={styles.logoTextWrap}>
              <span className={styles.logoText}>MediSupply</span>
              <span className={styles.tagline}>
                Your Favorite Digital Pharmacy
              </span>
            </div>
          </button>

          {/* Search (dummy) */}
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              className={styles.searchInput}
              placeholder="Search medical supplies..."
              readOnly
            />
          </div>

          {/* Actions */}
          <div className={styles.navActions}>
            <button className={styles.navBtn}>
              👤 <span className={styles.btnText}>My Account</span>
            </button>

            <button className={styles.navBtn} onClick={openCart}>
              🛒 <span className={styles.btnText}>Cart</span>
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop and Cart Drawer (only when open) */}
      {cartOpen && (
        <>
          <div
            className={styles.backdrop}
            onClick={closeCart}
          ></div>

          <aside className={styles.cartDrawer}>
            <div className={styles.drawerHeader}>
              <h3>Your Cart</h3>
              <button
                className={styles.navBtn}
                onClick={closeCart}
              >
                X
              </button>
            </div>

            <p className={styles.drawerText}>
              Cart drawer UI.
            </p>

            <button
              className={styles.checkoutBtn}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </aside>
        </>
      )}
    </>
  );
}

/* PropTypes */
NavBar.propTypes = {
  cartCount: PropTypes.number,
};

NavBar.defaultProps = {
  cartCount: 0,
};

export default NavBar;
