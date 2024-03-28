import React from "react";
import { Row, Col } from "react-bootstrap";
import QuestionTabsSection from "./QuestionsTab";

const TutorialSection = () => {
    

    return (
        <section className="mb-5">
            <Row>
                <Col>
                    <h1>
                        Ready to get started? Build your own site from scratch
                        or generate one for your project.
                    </h1>
                    <h2>
                        You get one site per GitHub account and organization,
                        and unlimited project sites. Let‘s get started.
                    </h2>
                </Col>
            </Row>
            <Row className="my-3 align-items-center">
                
                <Col xs={3} md={3}></Col>
                <Col xs={4} md={4} className={`bg-primary p-2 text-white border-right-0 rounded-left hover-overlay`}>
                    User or organization site

                </Col>
                <Col className={`p-2 border border-left-0 rounded-right hover-overlay`}>
                    Project site

                </Col>
                <Col xs={3} md={3}></Col>
            </Row>

        
            <Row>
                <QuestionTabsSection />
            </Row>
    </section>);
           
};

export default TutorialSection;
