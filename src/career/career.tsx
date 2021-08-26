import { professionalExperience, academicExperience } from "./careerData";

import "./career.scss";

export default function Career(props: {
  windowDimensions: { width: Number; height: number };
}) {
  let small = "";
  if (props.windowDimensions.width < 600) {
    small = "xxs";
  } else if (props.windowDimensions.width < 725) {
    small = "xs";
  } else if (props.windowDimensions.width < 975) {
    small = "sm";
  }

  const professional = professionalExperience.map((item) => {
    if (small === "xxs") {
      return (
        <div className="career-block-xss" key={item.org}>
          <div className="circle material-icons">work</div>

          <div className="org">
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.org}
            </a>
          </div>
          <div className="title">{item.title}</div>
          <div className="date">{`${item.start} - ${item.end}`}</div>
          <div className="description">{item.description}</div>
        </div>
      );
    }

    return (
      <div className="career-sub-container" key={item.org}>
        <div className="career-title-and-time">
          <div className="title">{item.title}</div>
          <div className="date">{`${item.start} - ${item.end}`}</div>
        </div>
        <div className="career-block">
          <div className="circle material-icons">work</div>

          <div className="org">
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.org}
            </a>
          </div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    );
  });

  const education = academicExperience.map((item) => {
    if (small === "xxs") {
      return (
        <div className="career-block-xss" key={item.org}>
          <div className="circle material-icons">edit</div>

          <div className="org">
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.org}
            </a>
          </div>
          <div className="title">{item.title}</div>
          <div className="date">{`${item.start} - ${item.end}`}</div>
          <div className="description">
            {item.description ? (
              item.description
            ) : (
              <div>
                <div>{item.uniData?.major}</div>
                <div>{item.uniData?.minor}</div>
                <div>{item.uniData?.gpa}</div>
                <div>{item.uniData?.achievements}</div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="career-sub-container" key={item.org}>
        <div className="career-title-and-time">
          <div className="title">{item.title}</div>
          <div className="date">{`${item.start} - ${item.end}`}</div>
        </div>
        <div className="career-block">
          <div className="circle material-icons">edit</div>

          <div className="org">
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.org}
            </a>
          </div>
          <div className="description">
            {item.description ? (
              item.description
            ) : (
              <div>
                <div>{item.uniData?.major}</div>
                <div>{item.uniData?.minor}</div>
                <div>{item.uniData?.gpa}</div>
                <div>{item.uniData?.achievements}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={`career-container container-${small}`}>
        <div className={`career-container-title title-${small}`}>
          Professional Experience
        </div>
        {professional}
      </div>

      <div className={`career-container container-${small}`}>
        <div className={`career-container-title title-${small}`}>
          Educational and Extracurricular Experience
        </div>
        {education}
      </div>
    </div>
  );
}
