import "./main.scss";
import { Col, Container, Row } from "react-bootstrap";
import HeroSpot from "./components/Hero";
import TutorialSection from "./components/Tutorial";
import Footer from "./components/Footer";
import NextSteps from "./components/NextSteps";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <HeroSpot />
            <Container>
                <Row>
                    <Col className="mx-auto" xs={12} md={8}>
                        <TutorialSection />
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
