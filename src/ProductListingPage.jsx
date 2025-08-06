import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { Button, Card, Row, Col, Spinner, Alert, Container } from 'react-bootstrap';

function ProductListingPage (){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from your backend when this component loads
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);
const handleDelete = (id) => {
  // FakeStoreAPI: simulate delete
  fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' })
    .then(() => {
      setProducts(products.filter((p) => p.id !== id));
    })
    .catch(() => setError('Failed to delete product'));
};
  return (
    <Container className="py-4">
      <h2 className="mb-4">Product List</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} style={{ objectFit: 'contain', height: '200px' }} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <strong>${product.price}</strong>
                  </Card.Text>
                  <Button
                    as={Link}
                    to={`/products/${product.id}`}
                    variant="primary"
                    className="me-2"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <DeleteConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={() => {
          handleDelete(selectedProduct.id);
          setShowModal(false);
        }}
        itemName={selectedProduct?.title}
      />
    </Container>
  );
};

export default ProductListingPage;