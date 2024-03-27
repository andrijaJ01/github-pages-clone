import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../style.scss';
import ghdesktop from "../../../assets/ghdesktop.png";
import found from     "../../../assets/foundation.png"

const QuestionTabsSection = () => {
  const [questionTab, setQuestionTab] = useState('option-terminal');

  const handleTabClick = (tabId) => {
    setQuestionTab(tabId);
  };

  return (
    <section>
      {/* 
      <Row id="user-site" className="tutorial-list wrapper active">
     <Col xs={12} md={6} lg={7} className="image-right">
          <p>Head over to <a href="https://github.com">GitHub</a> and <a data-proofer-ignore="true" href="https://github.com/new">create a new public repository</a> named <em>username</em>.github.io, where <em>username</em> is your username (or organization name) on GitHub.</p>
          <p className="details">If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>
        </Col>

        <Col xs={12} md={6} lg={5} className="question">
          <h4>What git client are you using?</h4>
          <Row className="tabs">
            <Col xs={4}>
              <a
                id="option-terminal"
                href="#terminal-step-1"
                className={`tab-link ${questionTab === 'option-terminal' ? 'selected' : ''}`}
                onClick={() => handleTabClick('option-terminal')}
              >
                A terminal
              </a>
            </Col>
            <Col xs={4}>
              <a
                id="option-desktop"
                href="#setup-in-desktop"
                className={`tab-link ${questionTab === 'option-desktop' ? 'selected' : ''}`}
                onClick={() => handleTabClick('option-desktop')}
              >
                GitHub Desktop
              </a>
            </Col>
            <Col xs={4}>
              <a
                id="option-newuser"
                href="#new-user-step-1"
                className={`tab-link ${questionTab === 'option-newuser' ? 'selected' : ''}`}
                onClick={() => handleTabClick('option-newuser')}
              >
                I don't know
              </a>
            </Col>
          </Row>
        </Col>

        <Col xs={12} className={`question-step ${questionTab !== 'option-newuser' ? 'hidden' : ''} image-right`}>
          <h4>Download GitHub Desktop</h4>
          <p>GitHub Desktop is a great way to use Git and GitHub on macOS and Windows.</p>
          <a className="desktop-download" href="https://desktop.github.com"><span className="icon"></span>Download GitHub Desktop</a>
          <Image src={ghdesktop} width="100%" alt="GitHub Desktop screenshot" className="full-size" />
        </Col>

        <Col xs={12} className={`question-step ${questionTab !== 'option-terminal' ? 'hidden' : ''} image-right`}>
          <h4>Clone the repository</h4>
          <p>Go to the folder where you want to store your project, and clone the new repository:</p>
          <div className="terminal">
            <div className="header"></div>
            <div className="shell">
              <p><span className="path">~</span><span className="prompt">$</span>git clone https://github.com/<em>username</em>/<em>username</em>.github.io</p>
            </div>
          </div>
        </Col>

        <Col xs={12} className={`question-step ${questionTab !== 'option-desktop' ? 'hidden' : ''} image-right`}>
          <h4>Clone the repository</h4>
          <p>Click the "Set up in Desktop" button. When the GitHub desktop app opens, save the project.</p>
          <p className="details">If the app doesn't open, launch it and clone the repository from the app.</p>
        </Col>
      </Row>
      */}

      <Row classname='w-100'>
        <Col className='d-flex'>
        <Row>
        <Col md={7}>
        <p>Head over to <a href="https://github.com">GitHub</a> and <a data-proofer-ignore="true" href="https://github.com/new">create a new public repository</a> named <em>username</em>.github.io, where <em>username</em> is your username (or organization name) on GitHub.</p>
          <p className="details">If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>
        </Col>
        <Col >
          <Image fluid src={found}/>
        </Col>
        </Row>
        </Col>
      </Row>
    </section>
  );
};

export default QuestionTabsSection;
