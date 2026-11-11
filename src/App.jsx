import { useState } from "react";
import "./App.css";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      changeQuantity(product.id, 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function changeQuantity(id, change) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div className="container">
        <h2>Products</h2>
        <div className="products">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>

        <Cart
          cart={cart}
          total={total}
          onChangeQuantity={changeQuantity}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}