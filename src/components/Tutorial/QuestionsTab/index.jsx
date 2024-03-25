import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../style.scss';
import ghdesktop from "../../../assets/ghdesktop.png"
const QuestionTabsSection = () => {
  const [questionTab, setQuestionTab] = useState('option-terminal');

  const handleTabClick = (tabId) => {
    setQuestionTab(tabId);
  };

  return (
    <section id="tutorial" className="tutorial">
      <Row id="user-site" className="tutorial-list wrapper active">
        <Col id="create-repo-step" className="image-right">
          <h4>Create a repository</h4>
          <p>Head over to <a href="https://github.com">GitHub</a> and <a data-proofer-ignore="true" href="https://github.com/new">create a new public repository</a> named <em>username</em>.github.io, where <em>username</em> is your username (or organization name) on GitHub.</p>
          <p className="details">If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>
        </Col>

        <li className="question">
          <h4>What git client are you using?</h4>
          <ul className="tabs">
            <li>
              <a
                id="option-terminal"
                href="#terminal-step-1"
                className={questionTab === 'option-terminal' ? 'selected' : ''}
                onClick={() => handleTabClick('option-terminal')}
              >
                A terminal
              </a>
            </li>
            <li>
              <a
                id="option-desktop"
                href="#setup-in-desktop"
                className={questionTab === 'option-desktop' ? 'selected' : ''}
                onClick={() => handleTabClick('option-desktop')}
              >
                GitHub Desktop
              </a>
            </li>
            <li>
              <a
                id="option-newuser"
                href="#new-user-step-1"
                className={questionTab === 'option-newuser' ? 'selected' : ''}
                onClick={() => handleTabClick('option-newuser')}
              >
                I don't know
              </a>
            </li>
          </ul>
        </li>

        <li id="new-user-step-1" className={questionTab !== 'option-newuser' ? 'option-newuser hidden' : 'option-newuser'}>
          <h4>Download GitHub Desktop</h4>
          <p>GitHub Desktop is a great way to use Git and GitHub on macOS and Windows.</p>
          <a className="desktop-download" href="https://desktop.github.com"><span className="icon"></span>Download GitHub Desktop</a>
          <Image src={ghdesktop} width="1054" alt="GitHub Desktop screenshot" className="full-size" />
        </li>

        <li id="terminal-step-1" className={questionTab !== 'option-terminal' ? 'option-terminal hidden' : 'option-terminal'}>
          <h4>Clone the repository</h4>
          <p>Go to the folder where you want to store your project, and clone the new repository:</p>
          <div className="terminal">
            <div className="header"></div>
            <div className="shell">
              <p><span className="path">~</span><span className="prompt">$</span>git clone https://github.com/<em>username</em>/<em>username</em>.github.io</p>
            </div>
          </div>
        </li>

        <li id="setup-in-desktop" className={questionTab !== 'option-desktop' ? 'option-desktop image-right hidden' : 'option-desktop image-right'}>
          <h4>Clone the repository</h4>
          <p>Click the "Set up in Desktop" button. When the GitHub desktop app opens, save the project.</p>
          <p className="details">If the app doesn't open, launch it and clone the repository from the app.</p>
        </li>
      </Row>
    </section>
  );
};

export default QuestionTabsSection;
