import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ProductListingPage from "./ProductListingPage";
import ProductDetailsPage from "./ProductDetailsPage";
import AddProductPage from "./AddProductPage";
import EditProductPage from "./EditProductPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
      </Routes>
    </>
  );
}

export default App;