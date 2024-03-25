import React from 'react';
import { Col } from 'react-bootstrap'; // Import Col from react-bootstrap


const Card = ({ title, children }) => {
  return (
    <Col md={12}>
      <h4>{title}</h4>
      <div className="card-content">{children}</div>
    </Col>
  );
};

export default Card;
