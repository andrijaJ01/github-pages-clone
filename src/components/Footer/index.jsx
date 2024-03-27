import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss'; 
import { FaGithub } from "react-icons/fa";
import {  Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer>
        <Row className="d-flex-inline align-items-center justify-content-center">
          <Col xs={12} md={4} className="d-flex gap-2">
            <p>&copy; 2024 GitHub, Inc.</p>
            <p><Link to="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</Link></p>
            <p><Link to="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</Link></p>
            <p><Link to="https://github.com/security">Security</Link></p>
            <p><Link to="https://support.github.com">Contact</Link></p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Link to="/">
              <FaGithub />
            </Link>
          </Col>
          <Col xs={12} md={4} className="d-flex gap-2">
            <p><Link to="https://www.githubstatus.com/">Status</Link></p>
            <p><Link to="https://docs.github.com/rest">API</Link></p>
            <p><Link to="https://training.github.com">Training</Link></p>
            <p><Link to="https://shop.github.com">Shop</Link></p>
            <p><Link to="https://github.blog">Blog</Link></p>
            <p><Link to="https://github.com/about">About</Link></p>
          </Col>
        </Row>
      </footer>
  );
};

export default Footer;
