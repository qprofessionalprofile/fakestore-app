import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ProductForm({ onSubmit, initialValues = {}, submitLabel = "Add Product" }) {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(initialValues.description || "");
  const [price, setPrice] = useState(initialValues.price || "");
  const [category, setCategory] = useState(initialValues.category || "");

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price: parseFloat(price),
      category,
    };
    onSubmit(newProduct);

    // Optionally clear form if adding
    if (!initialValues.title) {
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{submitLabel}</h2>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {submitLabel}
      </Button>
    </Form>
  );
}

export default ProductForm;