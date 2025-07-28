import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">All Products</Link>
      <Link to="/add">Add Product</Link>
    </nav>
  );
}