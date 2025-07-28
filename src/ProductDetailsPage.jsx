
import React from 'react';

const ProductDetailsPage = ({ product, onBack }) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <button onClick={onBack}>Back to Products</button>
    </div>
  );
};

export default ProductDetailsPage;