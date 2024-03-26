import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import {Link} from 'react-router-dom'

const TutorialSection = () => {
  return (
    <section>
      <Row className="gx-0">
        <Col>
          <h1>Ready to get started? Build your own site from scratch or generate one for your project.</h1>
          <h2>You get one site per GitHub account and organization, and unlimited project sites. Let‘s get started.</h2>
        </Col>
      </Row>
      <Row className="text-center justify-content-center align-items-center my-3 gx-0">
        <Col xs="auto" className="d-flex justify-content-center align-items-center">
          <Row className="gx-0">
            <Col md={8} className='d-inline-block fs-15px'>
              <Link to="#user-site" className="selected ">User or organization site</Link>
            </Col>
            <Col md={3}>
              <Link to="#project-site">Project site</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default TutorialSection;
