import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { Button } from 'react-bootstrap'; 

function ProductListingPage (){
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from your backend when this component loads
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Replace with your real API endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load products', err));
  }, []);
const handleDelete = (id) => {
  console.log('Deleting product with ID:', id);
  // TODO: remove item from state or call API
};
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm font-bold">${product.price}</p>
              <Button variant="danger" onClick={() => {setSelectedProduct(product); setShowModal(true);}}>Delete</Button>
              <Link
                to={`/products/${product.id}`}
                className="text-blue-500 underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}<DeleteConfirmationModal show={showModal} onHide={() => setShowModal(false)} onConfirm={() => {handleDelete(selectedProduct.id); setShowModal(false);}} itemName={selectedProduct?.title}/>
    </div>
  );
};

export default ProductListingPage;