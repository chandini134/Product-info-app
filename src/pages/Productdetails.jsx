import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge, ListGroup, Table } from "react-bootstrap";
import products from "../data/products.json";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5 text-danger">❌ Product not found</h2>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0">
        <Row className="g-0">
          {/* Left Side - Product Image */}
          <Col md={5}>
            <Card.Img
  variant="top"
  src={new URL(`../assets/${product.image}`, import.meta.url).href}
  alt={product.name}
/>
          </Col>

          {/* Right Side - Product Details */}
          <Col md={7}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-bold">{product.name}</h2>
                <Badge bg="success">{product.category}</Badge>
              </div>

              <p className="mt-3 text-muted">
                <strong>Traceability:</strong> {product.traceability}
              </p>

              {/* Features */}
              <h5 className="mt-4">✨ Features</h5>
              <ListGroup className="mb-3">
                {product.features.map((f, idx) => (
                  <ListGroup.Item key={idx}>✅ {f}</ListGroup.Item>
                ))}
              </ListGroup>

              {/* Nutrition Table */}
              <h5>🍽 Nutrition Info</h5>
              <Table striped bordered hover size="sm" className="w-75 mb-4">
                <tbody>
                  {Object.entries(product.nutrition).map(([key, value], idx) => (
                    <tr key={idx}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Reviews */}
              <h5>⭐ Customer Reviews</h5>
              <ListGroup className="mb-4">
                {product.reviews.map((review, idx) => (
                  <ListGroup.Item key={idx}>💬 {review}</ListGroup.Item>
                ))}
              </ListGroup>

              {/* Buttons */}
              <div className="d-flex gap-3">
                <Link to="/">
                  <Button variant="secondary">⬅ Back to Products</Button>
                </Link>
               
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
