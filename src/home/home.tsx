import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

import ResumeComponent from "./resumeComponent";
import "./home.scss";

export default function Home(props: {
  windowDimensions: { width: Number; height: number };
}) {
  let small = "";
  if (props.windowDimensions.width < 500) {
    small = "-xs";
  } else if (props.windowDimensions.width < 925) {
    small = "-sm";
  }

  return (
    <div className="home-space">
      <div className={`home-photo${small}`}></div>
      <div className={`home-box${small}`}>
        <div className="name">Hey There!</div>
        <div className="name">I'm Merrick Tian</div>
        <div className="intro">
          A programmer, a software engineer, a web developer, and responsible
          for many silly projects
        </div>

        <div className="home-line"></div>

        <div className="icon-row">
          <a
            href="https://github.com/mtian725"
            className="icon-link"
            target="_blank"
            rel="noreferrer"
            key="Github"
          >
            <div
              className="icon"
              style={{
                backgroundImage: `url(${Github})`,
              }}
            ></div>
          </a>

          <a
            href="https://www.linkedin.com/in/merricktian/"
            className="icon-link"
            target="_blank"
            rel="noreferrer"
            key="LinkedIn"
          >
            <div
              className="icon"
              style={{
                backgroundImage: `url(${Linkedin})`,
              }}
            ></div>
          </a>

          <ResumeComponent />
        </div>
      </div>
    </div>
  );
}
