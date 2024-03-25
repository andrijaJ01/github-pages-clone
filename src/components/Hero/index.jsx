import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"
import logo from "../../assets/logo.svg"

import heroImg from "../../assets/foundation.png"


const HeroSpot = () => {
  return (
    <section className='hero-spot'>
      <Row noGutters className='gx-0'>
        <Col xs={12} className="text-center">
          <a href="/">
            <img src={logo} alt="GitHub Pages" className="logo" />
          </a>
          <h1>Websites for you and your projects.</h1>
          <h2>
            Hosted directly from your{" "}
            <a href="https://github.com">GitHub repository</a>. Just edit, push, and
            your changes are live.
          </h2>
          <a href="https://help.github.com/pages/" className="help-link">
            Pages Help
          </a>
        </Col>
      </Row>
      <Row noGutters className='gx-0'>
        <Col xs={12} id="slideshow">
            <Image
              src={heroImg}
              alt="Bootstrap"
              className="slide active"
              width={893}
            />
        </Col>
      </Row>
    </section>
  );
}

export default HeroSpot;
