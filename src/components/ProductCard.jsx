export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button onClick={() => onAdd(product)}>Add to cart</button>
    </div>
  );
}