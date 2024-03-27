import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Link } from 'react-router-dom';
import QuestionTabsSection from './QuestionsTab';

const TutorialSection = () => {
  const [activeRow, setActiveRow] = useState('user-site');

  const handleRowChange = (rowId) => {
    setActiveRow(rowId);
  };

  return (
    <section className='w-80'>
      <Row className="gx-0">
        <Col>
          <h1>Ready to get started? Build your own site from scratch or generate one for your project.</h1>
          <h2>You get one site per GitHub account and organization, and unlimited project sites. Let‘s get started.</h2>
        </Col>
      </Row>
      <Row className="text-center justify-content-center align-items-center my-3 gx-0">
        <Col xs="auto" className="d-flex justify-content-center align-items-center">
          <Row className="gx-0">
            <Col md={8} xs={8} className={`d-inline-block fs-15px bg-primary ${activeRow === 'user-site' ? 'selected' : ''}`} onClick={() => handleRowChange('user-site')}>
              <Link to="#user-site" className="lh-1em p-2 position-relative text-light">User or organization site</Link>
            </Col>
            <Col md={3} xs={3} className={`d-inline-block p-2 fs-15px bg-light ${activeRow === 'project-site' ? 'selected' : ''}`} onClick={() => handleRowChange('project-site')}>
              <Link to="#project-site" className="lh-1em position-relative text-dark">Project site</Link>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Render QuestionTabsSection based on activeRow state */}
      {activeRow === 'user-site' && (
        <Row>
          <QuestionTabsSection />
        </Row>
      )}
      {activeRow === 'project-site' && (
        <Row>
        
        </Row>
      )}
    </section>
  );
}

export default TutorialSection;
