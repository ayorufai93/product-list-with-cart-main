import { useState, useEffect } from "react";
import products from "./components/data.js"
import ProductList from "./components/Temp.jsx"
import Cart from "./components/Cart.jsx";


function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container">
        <div className="products-section">
      <h1>Desserts</h1>
      </div>
      <ProductList products={products} cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart}/> 
    </div>
  );
}

export default App;
