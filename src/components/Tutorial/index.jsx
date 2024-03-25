import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import Card from '../UI/Card';
import QuestionTabsSection from './QuestionsTab';

const TutorialSection = () => {
  const [activeTab, setActiveTab] = useState("user-site");
  const [questionTab, setQuestionTab] = useState("option-terminal");

  const handleTabClick = (tabId) => {
    setQuestionTab(tabId);
  };

  return (
    <section id="tutorial" className="tutorial">
      <h1>Ready to get started? Build your own site from scratch or generate one for your project.</h1>
      <h2>You get one site per GitHub account and organization, <br />and unlimited project sites. Let‘s get started.</h2>
    
      <Row className="tabs justify-content-center">
        <Col md={12}>
          <a href="#user-site" className={activeTab === "user-site" ? "selected" : ""} onClick={() => setActiveTab("user-site")}>User or organization site</a>
          <a href="#project-site" className={activeTab === "project-site" ? "selected" : ""} onClick={() => setActiveTab("project-site")}>Project site</a>
        </Col>
      </Row>

      <Row id="user-site" className={`tutorial-list wrapper ${activeTab === "user-site" ? "active" : ""}`}>
        <QuestionTabsSection />
      </Row>

      <Row id="project-site" className={`tutorial-list wrapper ${activeTab === "project-site" ? "active" : ""}`}>
        {/* Content for project site */}
      </Row>
    </section>
  );
}

export default TutorialSection;
