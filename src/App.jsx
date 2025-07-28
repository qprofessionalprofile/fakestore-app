import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ProductListingPage from "./ProductListingPage";
import ProductDetailsPage from "./ProductDetailsPage";
import AddProductPage from "./AddProductPage";
import EditProductPage from "./EditProductPage";
import ProductForm from "./ProductForm";

function App() {
  const [products, setProducts] = useState([]);

  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage products={products} />} />
        <Route path="/products/:id" element={<ProductDetailsPage products={products} />} />
        <Route path="/add" element={<AddProductPage onAddProduct={handleAddProduct} />} />
        <Route path="/edit/:id" element={<EditProductPage products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;