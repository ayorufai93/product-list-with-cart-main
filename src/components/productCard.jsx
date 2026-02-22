function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button className="add-btn" onClick={addToCart}>
        <img src="/images/icon-add-to-cart.svg" alt="cart"/>
       Add to Cart
</button>
    </div>
  );
}

export default ProductCard;

         