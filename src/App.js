import './main.scss';
import { Container } from 'react-bootstrap';
import HeroSpot from './components/Hero';
import TutorialSection from './components/Tutorial';
import Footer from './components/Footer';
import NextSteps from './components/NextSteps';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <Router>
  <Container fluid className="gx-0">
    <HeroSpot />
    <TutorialSection />
    {/*<NextSteps />*/}

  </Container>
  </Router>
  );
}

export default App;
