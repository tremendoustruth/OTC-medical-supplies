import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer'
import NavBar from './NavBar.jsx'
import ProductList from './ProductList.jsx'



function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/inventory'); // Replace with your backend endpoint URL
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
  }, []
  )

  return (
    <div className="app-layout">
      <NavBar />
      <h1>Welcome to MediSupply!</h1>
      {products && <ProductList products={products} />}
      <Footer />
    </div>
  );
}
export default App;



