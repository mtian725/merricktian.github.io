import "./projectOverlay.scss";
import { projectData } from "./projectData";

export default function ProjectOverlay(props: {
  activeId: string;
  setActive: (val: string) => void;
  windowDimensions: { width: Number; height: number };
}) {
  let overlay = <div></div>;

  if (props.activeId) {
    let small = "";
    if (props.windowDimensions.width < 450) {
      small = "-sm";
    }

    document.body.style.overflow = "hidden";

    const project = projectData.find((item) => item.name === props.activeId);

    const image = (
      <div
        className="image"
        style={{
          backgroundImage: `url(${project?.image})`,
          backgroundPosition: "center",
        }}
      />
    );

    const description = (
      <div className="description">
        <div className="title">{project?.name}</div>
        {project?.description}
      </div>
    );

    let toolsItems = [
      <div className="item material-icons" key="tag">
        local_offer
      </div>,
    ];
    project?.tools.map((item) => {
      toolsItems.push(
        <div className="item" key={item}>
          {item}
        </div>
      );
    });
    const tools = <div className="tools">{toolsItems}</div>;

    let links = [];
    links.push(
      <a
        href={project?.links.github}
        target="_blank"
        className="link"
        key="Github"
      >
        GitHub
      </a>
    );
    if (project?.links.urls) {
      project?.links.urls.map((item) => {
        links.push(
          <a href={item.url} target="_blank" className="link" key={item.label}>
            {item.label}
          </a>
        );
      });
    }
    const footer = <div className="footer">{links}</div>;

    overlay = (
      <div className="drop-shadow">
        <div className={`overlay${small}`}>
          <div
            className="material-icons close-icon"
            onClick={() => props.setActive("")}
          >
            close
          </div>
          {image}
          {description}
          {tools}
          {footer}
        </div>
      </div>
    );
  } else {
    document.body.style.overflow = "visible";
  }

  return overlay;
}
