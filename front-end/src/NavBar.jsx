import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "./assets/medisupplysymbol.jpeg";
import styles from "./NavBar.module.css";




function NavBar({ cartCount, onCartClick }) {
    const navigate = useNavigate();
    const location = useLocation();

    const goHome = () => navigate("/");

    if (location.pathname === "/checkout") { //TODO: add confirmation page as well
        return null; // Hide NavBar on checkout and confirmation pages
    }

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

                        {/* updated cart button */}
                        <button
                            className={styles.navBtn}
                            onClick={onCartClick}
                        >
                            🛒 <span className={styles.btnText}>Cart</span>
                            {cartCount > 0 && (
                                <span className={styles.badge}>{cartCount}</span>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

/* PropTypes */
NavBar.propTypes = {
    cartCount: PropTypes.number,
    onCartClick: PropTypes.func,
};

NavBar.defaultProps = {
    cartCount: 0,
    onCartClick: () => { },
};

export default NavBar;
