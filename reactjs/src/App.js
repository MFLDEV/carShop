import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer';
import Voiture from './Components/Voiture';
import VoitureListe from './Components/VoitureListe';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Container, Row,Col } from 'react-bootstrap';

function App() {
  const marginTop = { marginTop:"20px"};
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}  className="bg-dark text-white mt-4 p-5 rounded">
            <Routes>
              <Route  path="/" exact Component={Bienvenue}/>
              <Route  path="/add" exact Component={Voiture}/>
              <Route path="/edit/:id" exact component={Voiture}/> 
              <Route  path="/list" exact Component={VoitureListe}/>
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
