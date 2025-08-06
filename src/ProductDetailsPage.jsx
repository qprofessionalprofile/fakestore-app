import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Spinner, Alert, Container } from 'react-bootstrap';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Product not found.');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    setDeleting(true);
    fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' })
      .then(() => {
        setDeleting(false);
        navigate('/products');
      })
      .catch(() => {
        setError('Failed to delete product.');
        setDeleting(false);
      });
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return <Alert variant="warning">Product not found.</Alert>;

  return (
    <Container className="py-4">
      <Card>
        <Card.Img variant="top" src={product.image} style={{ objectFit: 'contain', height: '300px' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${product.price}
            <br />
            <strong>Description:</strong> {product.description}
            <br />
            <strong>Category:</strong> {product.category}
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate('/products')} className="me-2">
            Back to Products
          </Button>
          <Button variant="danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetailsPage;