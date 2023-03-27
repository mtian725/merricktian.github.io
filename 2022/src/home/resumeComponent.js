import Resume from "../images/Resume.pdf";

export default function ResumeComponent() {
  return (
    <a
      href={Resume}
      className="icon-link"
      target="_blank"
      rel="noreferrer"
      key="Resume"
    >
      <div className="icon material-icons">description</div>
    </a>
  );
}
