function DeleteProductFunctionality({ id, onDelete }) {
  function handleDelete() {
    fetch(`https://fakestoreapi.com/products${id}`, { method: "DELETE" })
      .then(() => onDelete(id));
  }

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteProductFunctionality;