import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteProductFunctionality({ id, onDelete }) {
  const [show, setShow] = useState(false);

  function handleDelete() {
    fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })
      .then(() => {
        setShow(false);
        onDelete(id);
      });
  }

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)}>
        Delete
      </Button>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProductFunctionality;