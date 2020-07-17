import React from 'react';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class App extends React.Component {
  constructor(props){
    super(props)

    this.titleRefs = [];
    this.titleTl = gsap.timeline();

    this.aboutRef = [];
    this.aboutTl = null;

    this.skillsRef = [];
    this.skillsTl = null;

    this.experienceRef = [];
    this.experienceTl = null;

    this.projectRef = [];
    this.projectRef = null;
  }

  componentDidMount () {
    // Timeline for title
    this.titleTl.to(this.titleRefs, {
      ease: "power3.out",
      duration: 2,
      autoAlpha: 1,
      y: -75,
      stagger: {
        each: 0.3,
        from: 'top',
        grid: 'auto',
      }
    });

    this.aboutTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.aboutRef,
       start: "top 75%",
       end: "bottom 0%",
     }
    });
    this.aboutTl.to(this.aboutRef, {
      duration: 2,
      ease: "power3.out",
      autoAlpha: 1,
      y: -100,
    });

    this.skillsTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.skillsRef,
       start: "top 75%",
       end: "bottom 0%",
     }
    });
    this.skillsTl.to(this.skillsRef, {
      duration: 2,
      ease: "power3.out",
      autoAlpha: 1,
      y: -100,
      stagger: {
        amount: 2,
      }
    }, 0);
  }

  render () {
    const title = (
      <div>
        <img
          src={require("./images/headshot.png")}
          className="App-logo"
          alt="Headshot"
          ref={img => this.titleRefs.push(img)}
        />
        <h3
          className="title"
          ref={h3 => this.titleRefs.push(h3)}
        >{"Hello there! I'm"}</h3>
        <h1
          className="title"
          ref={h1 => this.titleRefs.push(h1)}
        >Merrick Tian</h1>
        <div className="flex-center-wrap-container">
          <h4
            className="portfolio"
            ref={h4 => this.titleRefs.push(h4)}
          >
            <a className="portfolio" href="https://www.linkedin.com/in/merricktian/">LinkedIn</a>
          </h4>
          <h4
            className="portfolio"
            ref={h4 => this.titleRefs.push(h4)}
          >
            <a className="portfolio" href="https://github.com/mtian725">GitHub</a>
          </h4>
          <h4
            className="portfolio"
            ref={h4 => this.titleRefs.push(h4)}
          >
            <a className="portfolio" href="../images/MerrickTianResume.pdf">Resume</a>
          </h4>
        </div>
      </div>
    );
    const about = (
      <div>
        <h3
          className="label"
          ref={h3 => this.aboutRef.push(h3)}
        >About Me</h3>
        <br />
        <p
          className="about"
          ref={p => this.aboutRef.push(p)}
        >
          {
            "I am a third-year student at the University of Maryland, persuing a\
            Bachelor's Degree in Computer Science. I am also persuing a minor in\
            Classical Mythology. Currently, I am pursuing to be a full stack\
            developer, but I also have some interest in software engineering."
            // possibly add more text
          }
        </p>
        <br />
        <br />
      </div>
    );
    const skills = (
      <div>
        <h3
          className="label"
          ref={h3 => this.skillsRef.push(h3)}
        >Technical Skills</h3>
        <h5
          className="skill-title"
          ref={h5 => this.skillsRef.push(h5)}
        >CORE</h5>
        <div className="skill-container">
          <p
            className="skill"
            style={{backgroundColor: "#eb85ff"}}
            ref={p => this.skillsRef.push(p)}
          >Python</p>
          <p
            className="skill"
            style={{backgroundColor: "#eb85ff"}}
            ref={p => this.skillsRef.push(p)}
          >Java</p>
          <p
            className="skill"
            style={{backgroundColor: "#eb85ff"}}
            ref={p => this.skillsRef.push(p)}
          >C</p>
          <p
            className="skill"
            style={{backgroundColor: "#eb85ff"}}
            ref={p => this.skillsRef.push(p)}
          >Ruby</p>
          <p
            className="skill"
            style={{backgroundColor: "#eb85ff"}}
            ref={p => this.skillsRef.push(p)}
          >OCaml</p>
        </div>
        <br />
        <h5
          className="skill-title"
          ref={h5 => this.skillsRef.push(h5)}
        >WEB DEVELOPMENT</h5>
        <div className="skill-container">
          <p
            className="skill"
            style={{backgroundColor: "#8b85ff"}}
            ref={p => this.skillsRef.push(p)}
          >JavaScript</p>
          <p
            className="skill"
            style={{backgroundColor: "#8b85ff"}}
            ref={p => this.skillsRef.push(p)}
          >React</p>
          <p
            className="skill"
            style={{backgroundColor: "#8b85ff"}}
            ref={p => this.skillsRef.push(p)}
          >GSAP</p>
          <p
            className="skill"
            style={{backgroundColor: "#8b85ff"}}
            ref={p => this.skillsRef.push(p)}
          >HTML</p>
          <p
            className="skill"
            style={{backgroundColor: "#8b85ff"}}
            ref={p => this.skillsRef.push(p)}
          >CSS</p>
        </div>
        <br />
        <h5
          className="skill-title"
          ref={h5 => this.skillsRef.push(h5)}
        >EDUCATION</h5>
        <div className="skill-container">
          <p
            className="skill"
            style={{backgroundColor: "#59fcff"}}
            ref={p => this.skillsRef.push(p)}
          >Object-Oriented Programming</p>
          <p
            className="skill"
            style={{backgroundColor: "#59fcff"}}
            ref={p => this.skillsRef.push(p)}
          >Data Structures</p>
          <p
            className="skill"
            style={{backgroundColor: "#59fcff"}}
            ref={p => this.skillsRef.push(p)}
          >Organization of Programming Languages</p>
          <p
            className="skill"
            style={{backgroundColor: "#59fcff"}}
            ref={p => this.skillsRef.push(p)}
          >Algorithms</p>
          <p
            className="skill"
            style={{backgroundColor: "#59fcff"}}
            ref={p => this.skillsRef.push(p)}
          >Discrete Structures</p>
          <p
            className="skill"
            style={{backgroundColor: "#59fcff"}}
            ref={p => this.skillsRef.push(p)}
          >Multivariate Calculus</p>
        </div>
        <br />
        <h5
          className="skill-title"
          ref={h5 => this.skillsRef.push(h5)}
        >OTHER</h5>
        <div className="skill-container">
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >Git</p>
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >Slack</p>
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >Unix</p>
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >Assembly</p>
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >Unity</p>
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >AR/VR</p>
        </div>
        <br />
      </div>
    )
    const experience = (
      <div>
        <br />
      </div>
    );
    const projects = (
      <div>
        <br />
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          {title}
        </header>
        <div className="container">
          {about}
        </div>
        <div className="container">
          {skills}
        </div>
        <div className="container">
          {experience}
        </div>
        <div className="container">
          {projects}
        </div>
      </div>
    );
  }
}

export default App;
