import React from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">🌱 Organic Products</h1>
      <Row>
        {products.map((p) => (
          <Col key={p.id} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
