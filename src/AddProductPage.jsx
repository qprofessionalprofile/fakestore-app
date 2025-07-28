import { useState } from "react";

function AddProductPage() {
  const [form, setForm] = useState({ name: "", price: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added:", data);
        setForm({ name: "", price: "" }); // clear form
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Price:{" "}
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductPage;