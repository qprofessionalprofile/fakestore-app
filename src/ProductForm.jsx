import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      id: crypto.randomUUID(),
      name,
      description,
      price: parseFloat(price),
    };
    onAddProduct(newProduct);

    // Clear form
    setName("");
    setDescription("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Add a New Product</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;