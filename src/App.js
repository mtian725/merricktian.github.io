import React from 'react';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPhoneSquareAlt, faEnvelopeSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.triggerTabs = this.triggerTabs.bind(this);

    this.greetingRefOne = [];
    this.greetingRefTwo = [];
    this.iconsRef = [];
    this.greetingTl = gsap.timeline();

    this.componentRef = [null, null, null, null];
    this.componentPositions = [0, 0, 0, 0];

    this.scrollTl = null;

    this.jumpScrollTl = gsap.timeline();

    this.state = {
      selected: 0
    }
  }

  componentDidMount () {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    for (let i=0; i<this.componentRef.length; i++) {
      this.componentPositions[i] =
        this.componentRef[i].getBoundingClientRect().y -
        this.componentRef[0].getBoundingClientRect().y;
    }

    const self = this;
    window.addEventListener('scroll', function() {
      console.log(window.scrollY);
      console.log(self.componentPositions);
      if (window.scrollY > self.componentPositions[3] - (window.innerHeight/2)) {
        self.setState({ selected: 3 });
      } else if (window.scrollY > self.componentPositions[2] - (window.innerHeight/2)) {
        self.setState({ selected: 2 });
      } else if (window.scrollY > self.componentPositions[1] - (window.innerHeight/2)) {
        self.setState({ selected: 1 });
      } else {
        self.setState({ selected: 0 });
      }
    });

    for (let i=0; i < this.greetingRefOne.length; i++) {
      this.greetingTl.to(this.greetingRefOne[i], {
        duration: 0,
        display: 'inline'
      }, 0.05 * i);
    }
    for (let i=0; i < this.greetingRefTwo.length; i++) {
      this.greetingTl.to(this.greetingRefTwo[i], {
        duration: 0,
        display: 'inline'
      }, (this.greetingRefOne.length + i) * 0.05);
    }
    for (let i=0; i < this.iconsRef.length; i++) {
      this.greetingTl.to(this.iconsRef[i], {
        duration: 0.1,
        y: 0
      }, (this.greetingRefOne.length + this.greetingRefTwo.length) * 0.05 + i * 0.2);
    }

    this.scrollTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.componentRef[1],
       start: "top 90%",
     }
    });
    this.scrollTl.fromTo(this.componentRef[1], {
      opacity: 0,
      scale: 0.5,
      y: 100
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    this.scrollTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.componentRef[2],
       start: "top 90%",
     }
    });
    this.scrollTl.fromTo(this.componentRef[2], {
      opacity: 0,
      scale: 0.5,
      y: 100
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    this.scrollTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.componentRef[3],
       start: "top 90%",
     }
    });
    this.scrollTl.fromTo(this.componentRef[3], {
      opacity: 0,
      scale: 0.5,
      y: 100
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }

  triggerTabs (value) {
    this.jumpScrollTl.to(window, {
      duration: 0.5,
      ease: "power3.out",
      scrollTo: this.componentPositions[value]
    });
    this.setState({
      selected: value
    });
  }

  render () {
    this.greetingRefOne = [];
    this.greetingRefTwo = [];
    this.iconsRef = [];

    const greeting_one = [];
    const phrase1 = "Hey There!";
    for (let i = 0; i < phrase1.length; i++) {
      if (phrase1[i] === " ") {
        greeting_one.push(
          <div key={i}
            className="Title-Text"
            ref={div => this.greetingRefOne.push(div)}
          >
            &nbsp;
          </div>);
      } else {
        greeting_one.push(
          <div
            key={i}
            className="Title-Text"
            ref={div => this.greetingRefOne.push(div)}
          >
            {phrase1[i]}
          </div>);
      }
    }

    const greeting_two = [];
    const phrase2 = "I'm Merrick Tian";
    for (let i = 0; i < phrase2.length; i++) {
      if (phrase2[i] === " ") {
        greeting_two.push(
          <div
            key={i}
            className="Title-Text"
            ref={div => this.greetingRefTwo.push(div)}
          >
            &nbsp;
          </div>);
      } else {
        greeting_two.push(
          <div
            key={i}
            className="Title-Text Title-Bold"
            ref={div => this.greetingRefTwo.push(div)}
          >
            {phrase2[i]}
          </div>);
      }
    }

    return (
      <div>
        <Container
          fluid
          className="Header"
        >
          <Container
            fluid
            className="d-flex justify-content-around flex-wrap"
          >
            <div
              className="Header-Item"
              style={{ color: this.state.selected === 0 ? '#de73ff' : 'white'}}
              onClick={() => this.triggerTabs(0)}
            >HOME</div>
            <div
              className="Header-Item"
              style={{ color: this.state.selected === 1 ? '#de73ff' : 'white'}}
              onClick={() => this.triggerTabs(1)}
            >ABOUT</div>
            <div
              className="Header-Item"
              style={{ color: this.state.selected === 2 ? '#de73ff' : 'white'}}
              onClick={() => this.triggerTabs(2)}
            >PROFESSIONAL</div>
            <div
              className="Header-Item"
              style={{ color: this.state.selected === 3 ? '#de73ff' : 'white'}}
              onClick={() => this.triggerTabs(3)}
            >PERSONAL</div>
          </Container>
        </Container>
        <div ref={div => this.componentRef[0]=div}>
          <Container
            fluid
            className="d-flex justify-content-around flex-column-reverse Title"
          >
            <Container
              fluid
              className="d-flex flex-column-reverse"
            >
              <div
                className="d-flex justify-content-center"
                style={{ overflow: "hidden" }}
              >
                <div
                  className="Icon-Wrapper"
                  title="LinkedIn"
                  ref={div => this.iconsRef.push(div)}
                >
                  <a href="https://www.linkedin.com/in/merricktian/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="Icon Left"
                    />
                  </a>
                </div>
                <div
                  className="Icon-Wrapper"
                  ref={div => this.iconsRef.push(div)}
                  title="GitHub"
                >
                  <a href="https://github.com/mtian725">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="Icon"
                    />
                  </a>
                </div>
                <div
                  className="Icon-Wrapper"
                  ref={div => this.iconsRef.push(div)}
                  title="Resume"
                >
                  <a href={require("./images/MerrickTianResume.pdf")}> {/* put updated resume */}
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="Icon Right"
                    />
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                {greeting_two}
              </div>
              <div className="d-flex justify-content-center">
                {greeting_one}
              </div>
            </Container>
            <div className="d-flex justify-content-center">
              <img
                src={require("./images/headshot.png")}
                className="Temp-Headshot"
                alt="Temp-Headshot"
              />
              {/* replace with new headshot eventually */}
            </div>
          </Container>
        </div>
        <div ref={div => this.componentRef[1]=div}>
          <Container
            fluid
            className="d-flex justify-content-center flex-column"
          >
            <div>
              <div className="Content-Block Content-Title">
                I am...
              </div>
              <div className="Content-Block Me">
                {"...a third-year student at the University of Maryland, \
                pursuing a Bachelor's Degree in Computer Science and a minor \
                in Classical Mythology. Currently, I am aspiring to be a \
                full-stack engineer, and I also have an interest in software \
                engineering."}
              </div>
            </div>
            <div className="Content-Block Content-Title">
              Skills
            </div>
            <div className="Content-Block Skills">
              <div>
                <div className="Skill-Category"><strong>Core</strong></div>
                <div className="d-flex justify-content-around flex-row flex-wrap">
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Python</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Java</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >C</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Ruby</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >OCaml</div>
                </div>
              </div>
              <div>
                <div className="Skill-Category"><strong>Web Development</strong></div>
                <div className="d-flex justify-content-around flex-row flex-wrap">
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >JavaScript</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >React</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >GSAP</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >HTML</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >CSS</div>
                </div>
              </div>
              <div>
                <div className="Skill-Category"><strong>Other</strong></div>
                <div className="d-flex justify-content-around flex-row flex-wrap">
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Git</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Slack</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Unix</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Assembly</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Unity</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Heroku</div>
                </div>
              </div>
              <div>
                <div className="Skill-Category"><strong>Education</strong></div>
                <div className="d-flex justify-content-around flex-row flex-wrap">
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Object-Oriented Programming</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Data Structures</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Organization of Programming Languages</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Algorithms</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Discrete Structures</div>
                  <div
                    className="Skill"
                    style={{backgroundColor:"#9999ff"}}
                  >Multivariate Calculus</div>
                </div>
              </div>
            </div>
            <div>
              <div className="Content-Block Content-Title">
                Contact
              </div>
              <div className="Content-Block Contact">
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                &nbsp;
                (781) - 666 - 1315
              </div>
              <div className="Content-Block Contact">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
                &nbsp;
                mtian725@gmail.com
              </div>
            </div>
          </Container>
        </div>
        <div ref={div => this.componentRef[2]=div}>
          <Container
            fluid
            className="d-flex justify-content-center flex-column"
          >
            <div className="Content-Block Content-Title">
              Professional Experience
            </div>
            <div className="Content-Block" style={{marginTop:"1rem"}}>
              <div
                style={{marginTop:"1rem"}}
                className="d-flex justify-content-around flex-row flex-wrap"
              >
                {/* no image */}
                <div className="Info"><strong>
                  Web Development Intern at Cmind Inc <br />
                  Jun 2020 - Aug 2020 <br />
                  Tools Used: JavaScript, React, Visual Studio
                </strong></div>
                <div className="Description">
                  {"I created several visually appealing and dynamic \
                   features on the web product \
                   through close collaboration and visualization of compiled \
                   financial and risk score data. I maintained and updated \
                   the web product as development advanced through the \
                   early stages of public distribution. "}
                </div>
                <div className="Description">
                  <u>Reference</u><br />
                  Weihong Zhang, PhD <br />
                  CEO of Cmind Inc <br />
                  cmindinc@gmail.com <br />
                  (518)-256-7188
                </div>
              </div>
              <div
                style={{marginTop:"1rem"}}
                className="d-flex justify-content-center flex-row flex-wrap"
              >
                <a href="https://www.fire.umd.edu/pvc">
                  <img
                    src={require("./images/FIREPVC.png")}
                    alt="PVC Website"
                    className="Image"
                  />
                </a>
                <div className="Info"><strong>
                  Student Researcher at FIRE <br />
                  Aug 2018 - Dec 2019 <br />
                  Tools Used: C#, Unity, ARCore
                </strong></div>
                <div className="Description">
                  {"Collaborated with the Phillips Collection to utilize \
                  augmented reality and virtual reality to develop \
                  innovative ways to explore and learn from museums. Invited \
                  to UMD’s Summer Research Fellowship Program, where I \
                  worked closely with \
                  my advisor and peers to further my research."}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div ref={div => this.componentRef[3]=div}>
          <Container
            fluid
            className="d-flex justify-content-center flex-column"
          >
            <div className="Content-Block Content-Title">
              Personal
            </div>
            <div className="Content-Block" style={{marginTop:"1rem"}}>
              <div
                style={{marginTop:"1rem"}}
                className="d-flex justify-content-around flex-row flex-wrap"
              >
                <div className="Info"><strong>
                  Cake Animations <br />
                  Tools Used: GSAP, JavaScript, React
                </strong></div>
                <div className="Description">
                  {"Project with the goal of exploring, learning, and \
                  practicing GSAP and animating web elements."}
                </div>
                <div
                  title="Website"
                >
                  <a href="https://mtian725.github.io/Cake-Animations/">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="Project-Icon"
                    />
                  </a>
                </div>
                <div
                  title="GitHub"
                >
                  <a href="https://github.com/mtian725/Cake-Animations">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="Project-Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="Content-Block" style={{marginTop:"1rem"}}>
              <div
                style={{marginTop:"1rem"}}
                className="d-flex justify-content-around flex-row flex-wrap"
              >
                <div className="Info"><strong>
                  Basic Calculator <br />
                  Tools Used: JavaScript, React
                </strong></div>
                <div className="Description">
                  {"Simple standard calculator with the goal of \
                  practicing fundamental concepts for React."}
                </div>
                <div
                  title="Website"
                >
                  <a href="https://mtian725.github.io/BasicCalculator/">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="Project-Icon"
                    />
                  </a>
                </div>
                <div
                  title="GitHub"
                >
                  <a href="https://github.com/mtian725/BasicCalculator">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="Project-Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="Content-Block" style={{marginTop:"1rem"}}>
              <div
                style={{marginTop:"1rem"}}
                className="d-flex justify-content-around flex-row flex-wrap"
              >
                <div className="Info"><strong>
                  Personal Website <br />
                  Tools Used: JavaScript, React, GSAP
                </strong></div>
                <div className="Description">
                  {"Personal website designed to be a portfolio. \
                  I will continue to update it as time pass."}
                </div>
                <div
                  title="GitHub"
                >
                  <a href="https://github.com/mtian725/merricktian.github.io">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="Project-Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="Content-Block" style={{marginTop:"1rem"}}>
              <div
                style={{marginTop:"1rem"}}
                className="d-flex justify-content-around flex-row flex-wrap"
              >
                <div className="Info"><strong>
                  Sierokarte Bot <br />
                  Tools Used: Python, Heroku
                </strong></div>
                <div className="Description">
                  {"Discord bot geared toward Granblue Fantasy for personal \
                  use. The bot was hosted by Heroku."}
                </div>
                <div
                  title="GitHub"
                >
                  <a href="https://github.com/mtian725/Sierokarte-Bot">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="Project-Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
