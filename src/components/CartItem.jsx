function CartItem({ item, cart, setCart }) {
  const increase = () => {
    setCart(
      cart.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    );
  };

  const decrease = () => {
    if (item.quantity === 1) {
      removeItem();
    } else {
      setCart(
        cart.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
      );
    }
  };

  const removeItem = () => {
    setCart(cart.filter(i => i.id !== item.id));
  };

  return (
    <div className="cart-item">
      <p>{item.name}</p>
      
      <div>
        <button onClick={decrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}

export default CartItem;