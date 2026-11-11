export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>ShahiQadam</h2>
      <span>Cart ({cartCount})</span>
    </nav>
  );
}