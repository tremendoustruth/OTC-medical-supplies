import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer'
import NavBar from './NavBar.jsx'
import CartDrawer from './CartDrawer.jsx'
import ProductList from './ProductList.jsx'
import { Routes, Route } from 'react-router-dom'
import Checkout from './Checkout.jsx'



function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cart drawer state
  const [isCartOpen, setIsCartOpen] = useState(false);

  //  Cart state
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  // cart functions
  const addToCart = (product) => {
    const id = product._id || product.id || product.title;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [
        ...prev,
        { id, title: product.title, price: Number(product.price), qty: 1 },
      ];
    });
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/inventory');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app-layout">
      {/* ALWAYS visible */}
      <NavBar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
        onDecreaseQty={decreaseQty}
        onIncreaseQty={(item) =>
          addToCart({ _id: item.id, title: item.title, price: item.price })
        }
        onRemoveFromCart={removeFromCart}
      />

      {/* PAGE CONTENT */}
      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page">
                <h1>Welcome to MediSupply!</h1>

                {products && (
                  <ProductList
                    products={products}
                    onAddToCart={addToCart}
                  />
                )}
              </div>
            }
          />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      {/* ALWAYS visible */}
      <Footer />
    </div>
  );
}

export default App;
