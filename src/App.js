import React from 'react';
import './App.css';
import { gsap } from "gsap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {

  render () {
    return (
      <div>
        {/* Some picture whose position is absolute */}
        <Container
          fluid
          className="d-flex flex-column-reverse Title"
        >
          <div
            className="d-flex justify-content-center"
          >
            <FontAwesomeIcon icon={faLinkedin} className="Icon Left"/>
            <FontAwesomeIcon icon={faGithub} className="Icon"/>
            <FontAwesomeIcon icon={faFileAlt} className="Icon Right"/>
          </div>
          <h1 className="Title-Text Title-Bold">{"I'm Merrick Tian"}<span className="Typing">|</span></h1>
          <h1 className="Title-Text">Hey There!</h1>

        </Container>
        <Container fluid style={{height: '25vh', backgroundColor: 'red'}}>
        </Container>
        <Container fluid style={{height: '50vh', backgroundColor: 'green'}}>
        </Container>
      </div>
    );
  }
}

export default App;
