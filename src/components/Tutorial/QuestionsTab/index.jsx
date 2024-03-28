import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../style.scss';
import found from     "../../../assets/img-right.png"
import ShellCodeBlock from '../../UI/Terminal';

const QuestionTabsSection = () => {

  const terminalContent=[
    `~ $ string text string text`,
`~ $ string text string text
 ~ $ string text string text
 ~ $ string text string text
 ~ $ string text string text`

  ];
  return (
    <section>
      
      <Row className="my-2 p-5 border">
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

  
        <Row>
        <Col md={12} className=' my-2 py-2 text-center border' >
        <h1>Clone the repository</h1>
        <p>Go to the folder where you want to store your project, and clone the new repository</p>
        <ShellCodeBlock content={terminalContent[0]}
        />
        </Col>
        </Row>
        <Row>

        <Col md={12} className='my-2 py-2 text-center border'>
        <h1>hello world</h1>
        <p>Go to the folder where you want to store your project, and clone the new repository</p>
        <ShellCodeBlock content={terminalContent[1]}/>
        </Col>
        </Row>
       
    </section>
  );
};

export default QuestionTabsSection;
