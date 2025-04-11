import { React, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Layout from "./components/Layout"

function App() {

  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login/>} />
     <Route element={<Layout cartCount={cart.length} />}>
      <Route path="/products" element={<ProductList/>} />
      <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}/>} />
     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
