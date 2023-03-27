import "./navOverlay.scss";
import { HeaderProps } from "./headerPropTypes";
import { Link } from "react-router-dom";

export default function NavOverlay(props: HeaderProps) {
  // toggleFunction does setToggle(!toggle) but toggle will always
  // be true at this point so the callback will always set toggle
  // to false
  return (
    <div className={`off ${props.toggleStatus ? "nav-overlay" : ""}`}>
      <div className="nav-container">
        <div className="tabs">
          <Link to="/Career" onClick={props.toggleFunction}>
            Career
          </Link>
        </div>
        <div className="tabs">
          <Link to="/Projects" onClick={props.toggleFunction}>
            Projects
          </Link>
        </div>
        <div className="tabs">
          <Link to="/Contact" onClick={props.toggleFunction}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
