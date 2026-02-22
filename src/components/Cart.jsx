import { useState } from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";

function Cart({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="cart">
      <h2>Your Cart ({cart.length})</h2>
      <img src="/images/illustration-empty-cart.svg" alt="empty cart"/>

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          cart={cart}
          setCart={setCart}
        />
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      {cart.length > 0 && (
        <>
          <button onClick={() => setShowModal(true)}>
            Confirm Order
          </button>
          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default Cart;