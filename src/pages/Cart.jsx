import React, { useState } from 'react'
import "./Cart.css"

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
    const [showPopup, setShowPopup] = useState(false);
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    
  
    return (
        <div className="CartContainer">
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>Cart is empty.</p> : null}
        {cart.map((item) => (
          <div className="CartItem" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, +e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <h3>Total: ${total.toFixed(2)}</h3>
        <button
  className="CheckoutBtn"
  onClick={() => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000); 
  }}
>
  Checkout
</button>
{showPopup && (
  <div className="SuccessPopup">
    ✅ Order placed successfully!
  </div>
)}
      </div>
    );
  };
  
  export default Cart;
