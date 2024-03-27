import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import QuestionTabsSection from "./QuestionsTab";

const TutorialSection = () => {
    const [activeRow, setActiveRow] = useState("user-site");

    const handleRowChange = (rowId) => {
        setActiveRow(rowId);
    };

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
                {/* <Row>
            <Col md={8} xs={8} className={`align-items-center bg-primary ${activeRow === 'user-site' ? 'selected' : ''}`} onClick={() => handleRowChange('user-site')}>
              <Link to="#user-site" className="lh-1em p-2 position-relatilasve text-light">User or organization site</Link>
            </Col>
            <Col md={3} xs={3} className={`d-inline-block p-2 fs-15px bg-light ${activeRow === 'project-site' ? 'selected' : ''}`} onClick={() => handleRowChange('project-site')}>
              <Link to="#project-site" className="lh-1em position-relative text-dark">Project site</Link>
            </Col>
          </Row> */}
                <Col md={3}></Col>
                <Col md={4} className={`bg-primary p-2 text-white`}>
                    User or organization site
                </Col>
                <Col className={`p-3`}>Project site</Col>
                <Col md={3}></Col>
            </Row>

            {/* {activeRow === "user-site" && (
                <Row>
                    <QuestionTabsSection />
                </Row>
            )}
            {activeRow === "project-site" && <Row></Row>} */}
        </section>
    );
};

export default TutorialSection;
