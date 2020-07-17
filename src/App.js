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
    this.projectTl = null;

    this.contactRef = [];
    this.contactTl = null;
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

    this.experienceTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.experienceRef,
       start: "top 75%",
       end: "bottom 0%",
     }
    });
    this.experienceTl.to(this.experienceRef, {
      duration: 2,
      ease: "power3.out",
      autoAlpha: 1,
      y: -100,
      stagger: {
        amount: 0.5, //change number when add more
      }
    }, 0);

    this.projectTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.projectRef,
       start: "top 75%",
       end: "bottom 0%",
     }
    });
    this.projectTl.to(this.projectRef, {
      duration: 2,
      ease: "power3.out",
      autoAlpha: 1,
      y: -100,
      stagger: {
        amount: 2,
      }
    }, 0);

    this.contactTl = gsap.timeline({
     scrollTrigger: {
       trigger: this.contactRef,
     }
    });
    this.contactTl.to(this.contactRef, {
      duration: 2,
      ease: "power3.out",
      autoAlpha: 1,
      y: -100,
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
            <a className="portfolio" href={require("./images/MerrickTianResume.pdf")}>Resume</a>
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
        <div className="sub-container">
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
        <div className="sub-container">
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
        <div className="sub-container">
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
        <div className="sub-container">
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
          <p
            className="skill"
            style={{backgroundColor: "#59ff96"}}
            ref={p => this.skillsRef.push(p)}
          >Heroku</p>
        </div>
        <br />
      </div>
    )
    const experience = (
      <div>
        <h3
          className="label"
          ref={h3 => this.experienceRef.push(h3)}
        >Professional Experience</h3>
        <br />
        <div
          className="sub-container"
          style={{backgroundColor:"#f4bdff",
            opacity: "0",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem"}}
          ref={div => this.experienceRef.push(div)}
        >
          <h5
            className="experience-title"
          >Web Development Intern at Cmind Inc</h5>
          <h5
            className="experience-year"
          >Jun 2020 - Aug 2020</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "Worked independently to visualize the data compiled by \
                collegues onto the web product."
              }
              <br />
              {
                "Was responsible for quickly updating the web product as \
                development approached the early stages of public distribution"
              }
              <br />
              <br />
              {
                "Tools Used: JavaScript, React, Visual Studio"
              }
              <br />
              {
                "Website: "
              }
              <a className="url" href="https://www.cmind-ai.com/">
                {"https://www.cmind-ai.com/"}
              </a>
            </p>
          </div>
        </div>
        <div
          className="sub-container"
          style={{backgroundColor:"#c0bdff",
            opacity: "0",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem"}}
          ref={div => this.experienceRef.push(div)}
        >
          <h5
            className="experience-title"
          >Student Researcher at FIRE: Phillips Virtual Culture</h5>
          <h5
            className="experience-year"
          >Sept 2018 - Dec 2019</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "Explored and researched the application of augmented reality \
                and virtual reality, specifically in a museum setting."
              }
              <br />
              {
                "Sought to determine whether or not augmented reality can draw \
                interest outside of a museum setting by leveraging the \
                creative potential."
              }
              <br />
              {
                "Was invited and took part in the Summer Research Fellowship \
                Program, where I worked closely with my advisor and peers to \
                develop my project."
              }
              <br />
              <br />
              {
                "Tools Used: C#, Unity, ARCore"
              }
              <br />
              {
                "Website: "
              }
              <a className="url" href="https://www.fire.umd.edu/pvc">
                {"https://www.fire.umd.edu/pvc"}
              </a>
            </p>
          </div>
        </div>
        <br />
      </div>
    );
    const projects = (
      <div>
        <h3
          className="label"
          ref={h3 => this.projectRef.push(h3)}
        >Personal Projects</h3>
        <br />
        <br />
        <div
          className="sub-container"
          style={{backgroundColor:"#f4bdff",
            opacity: "0",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem"}}
          ref={div => this.projectRef.push(div)}
        >
          <h5
            className="project"
          >Cake Animations</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "Project with the goal of exploring, learning, and practicing \
                GSAP and animating web elements."
              }
              <br />
              <br />
              {
                "Tools Used: GSAP, JavaScript, React"
              }
              <br />
              {
                "GitHub: "
              }
              <a className="url" href="https://github.com/mtian725/Cake-Animations">
                {"https://github.com/mtian725/Cake-Animations"}
              </a>
              <br />
              {
                "Website: "
              }
              <a className="url" href="https://mtian725.github.io/Cake-Animations/">
                {"https://mtian725.github.io/Cake-Animations/"}
              </a>
            </p>
          </div>
        </div>
        <div
          className="sub-container"
          style={{backgroundColor:"#c0bdff",
            opacity: "0"}}
          ref={div => this.projectRef.push(div)}
        >
          <h5
            className="project"
          >PythonProjects</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "A series of project geared toward helping my friend learn the \
                fundamentals of python. Topics include but not limited to \
                arrays, recursion, functions and object-oriented progrogramming."
              }
              <br />
              <br />
              {
                "Tools Used: Python"
              }
              <br />
              {
                "GitHub: "
              }
              <a className="url" href="https://github.com/mtian725/PythonProjects">
                {"https://github.com/mtian725/PythonProjects"}
              </a>
            </p>
          </div>
        </div>
        <div
          className="sub-container"
          style={{backgroundColor:"#a4fbfc",
            opacity: "0"}}
          ref={div => this.projectRef.push(div)}
        >
          <h5
            className="project"
          >BasicCalculator</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "Simple functional calculator with the goal of practicing \
                React. Specifically, I sought to practice working with stateful \
                and stateless components."
              }
              <br />
              <br />
              {
                "Tools Used: JavaScript, React"
              }
              <br />
              {
                "GitHub: "
              }
              <a className="url" href="https://github.com/mtian725/BasicCalculator">
                {"https://github.com/mtian725/BasicCalculator"}
              </a>
              <br />
              {
                "Website: "
              }
              <a className="url" href="https://mtian725.github.io/BasicCalculator/">
                {"https://mtian725.github.io/BasicCalculator/"}
              </a>
            </p>
          </div>
        </div>
        <div
          className="sub-container"
          style={{backgroundColor:"#a6ffc7",
            opacity: "0"}}
          ref={div => this.projectRef.push(div)}
        >
          <h5
            className="project"
          >Personal Website</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "Personal website designed to be a portfolio. I will continue \
                to update it as time pass."
              }
              <br />
              <br />
              {
                "Tools Used: JavaScript, React, GSAP"
              }
              <br />
              {
                "GitHub: "
              }
              <a className="url" href="https://github.com/mtian725/merricktian.github.io">
                {"https://github.com/mtian725/merricktian.github.io"}
              </a>
              <br />
              {
                "Website: "
              }
              <a className="url" href="https://merricktian.me/">
                {"https://merricktian.me/"}
              </a>
            </p>
          </div>
        </div>
        <div
          className="sub-container"
          style={{backgroundColor:"#f4bdff",
            opacity: "0",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem"}}
          ref={div => this.projectRef.push(div)}
        >
          <h5
            className="project"
          >Sierokarte Bot</h5>
          <div className="experience-box">
            <p className="experience">
              {
                "Discord bot geared toward Granblue Fantasy for personal use. \
                The bot is currently being hosted by Heroku."
              }
              <br />
              <br />
              {
                "Tools Used: Python, Heroku"
              }
              <br />
              {
                "GitHub: "
              }
              <a className="url" href="https://github.com/mtian725/Sierokarte-Bot">
                {"https://github.com/mtian725/Sierokarte-Bot"}
              </a>
            </p>
          </div>
        </div>
        <br />
      </div>
    );
    const contact = (
      <div>
        <h3
          className="label"
          ref={h3 => this.contactRef.push(h3)}
        >Contact Me</h3>
        <h4
          className="contact"
          ref={h4 => this.contactRef.push(h4)}
        >mtian725@gmail.com</h4>
        <h4
          className="contact"
          ref={h4 => this.contactRef.push(h4)}
        >(781)-666-1315</h4>
        <br />
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
        <div className="container">
          {contact}
        </div>
      </div>
    );
  }
}

export default App;
