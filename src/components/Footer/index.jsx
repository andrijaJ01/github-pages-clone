import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss'; // Import the CSS file
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="page-footer text-center">
      <Row className="align-items-center justify-content-center gx-0 px-0 w-100">
        <Col xs={12} md={4} className="text-md-left">
          <ul className="site-footer-links">
            <li>&copy; 2024 <span>GitHub</span>, Inc.</li>
            <li><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a></li>
            <li><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a></li>
            <li><a href="https://github.com/security">Security</a></li>
            <li><a href="https://support.github.com">Contact</a></li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <a href="/">
            <FaGithub className="mega-octicon octicon-mark-github" />
          </a>
        </Col>
        <Col xs={12} md={4} className="text-md-right">
          <ul className="site-footer-links">
            <li><a href="https://www.githubstatus.com/">Status</a></li>
            <li><a href="https://docs.github.com/rest">API</a></li>
            <li><a href="https://training.github.com">Training</a></li>
            <li><a href="https://shop.github.com">Shop</a></li>
            <li><a href="https://github.blog">Blog</a></li>
            <li><a href="https://github.com/about">About</a></li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
