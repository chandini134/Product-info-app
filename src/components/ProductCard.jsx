import React from "react";
import { Card, Button, Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card className=" d-flex shadow-lg h-100 border-0 rounded-3 " style={{width: '18rem', height: '100%'}}> 
     <Card.Img style={{height: '200px', objectFit: 'cover'}}
  variant="top"
  src={new URL(`../assets/${product.image}`, import.meta.url).href}
  alt={product.name}
/>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0">{product.name}</Card.Title>
          <Badge bg="success">{product.category}</Badge>
        </div>
        <Card.Text>
          <strong>Key Features:</strong>
        </Card.Text>
        <ListGroup variant="flush" className="mb-3">
          {product.features.slice(0, 2).map((f, idx) => (
            <ListGroup.Item key={idx} className="small">
              ✅ {f}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text>
          <strong>Calories:</strong> {product.nutrition.Calories} kcal
        </Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary" className="w-100">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
