export default function Cart({ cart, total, onChangeQuantity, onRemove }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <div>
            <button onClick={() => onChangeQuantity(item.id, -1)}>-</button>
            <span className="qty">{item.quantity}</span>
            <button onClick={() => onChangeQuantity(item.id, 1)}>+</button>
          </div>
          <span>Rs. {item.price * item.quantity}</span>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: Rs. {total}</h3>
    </div>
  );
}