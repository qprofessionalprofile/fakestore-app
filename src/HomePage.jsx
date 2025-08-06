import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container className="py-5 text-center">
      <h1>Welcome to FakeStore!</h1>
      <p className="mb-4">
        Discover a wide variety of products. Browse, add, edit, or delete items
        using our demo e-commerce app powered by FakeStoreAPI.
      </p>
      <Button as={Link} to="/products" variant="primary" size="lg">
        View Products
      </Button>
    </Container>
  );
}