import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProductPage() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", price: "" });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/products${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}

export default EditProductPage;