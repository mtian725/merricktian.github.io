import { useState } from "react";

import { projectData } from "./projectData";
import ProjectOverlay from "./projectOverlay";
import "./project.scss";

// Taken directly from https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
function hashCode(str: string) {
  // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i: number) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export default function Projects(props: {
  windowDimensions: { width: Number; height: number };
}) {
  const [active, setActive] = useState("");

  // the random background color determened by the project name is not
  // used but will keep in case something get's added in the future
  // that will need it
  let boxes;
  if (props.windowDimensions.width < 450) {
    boxes = projectData.map((item) => (
      <div
        className="project-box-resize"
        key={item.name}
        onClick={() => setActive(item.name)}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundColor: item.image
            ? ""
            : `#${intToRGB(hashCode(item.name))}`,
          backgroundPosition: "center",
        }}
      >
        <div className="project-box-resize-inner">
          <div className="label">{item.name}</div>
        </div>
      </div>
    ));
  } else {
    boxes = projectData.map((item) => (
      <div
        className="project-box"
        key={item.name}
        onClick={() => setActive(item.name)}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundColor: item.image
            ? ""
            : `#${intToRGB(hashCode(item.name))}`,
          backgroundPosition: "center",
        }}
      >
        <div className="project-box-inner">
          <div className="label">{item.name}</div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className="projects">{boxes}</div>
      <ProjectOverlay
        activeId={active}
        setActive={(val: string) => setActive(val)}
        windowDimensions={props.windowDimensions}
      />
    </div>
  );
}
