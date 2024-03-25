import React from 'react';
import { Col } from 'react-bootstrap';

const Card = ({ title, text, linkText, linkUrl, username }) => {
  return (
    <Col md={12} className="image-right" id="create-repo-step">
      <h4>{title}</h4>
      <p>{text} <a href={linkUrl}>{linkText}</a> named <em>{username}</em>.github.io, where <em>{username}</em> is your username (or organization name) on GitHub.</p>
      <p className="details">If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>
    </Col>
  );
};

export default Card;
