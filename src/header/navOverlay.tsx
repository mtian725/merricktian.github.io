import "./navOverlay.scss";
import { HeaderProps } from "./headerPropTypes";
import { Link } from "react-router-dom";

export default function NavOverlay(props: HeaderProps) {
  // toggleFunction does setToggle(!toggle) but toggle will always
  // be true at this point so the callback will always set toggle
  // to false
  return (
    <div className={`off ${props.toggleStatus ? "navOverlay" : ""}`}>
      <div className="navContainer">
        <div className="tabs" onClick={props.toggleFunction}>
          <Link to="/Career">Career</Link>
        </div>
        <div className="tabs" onClick={props.toggleFunction}>
          <Link to="/Projects">Projects</Link>
        </div>
        <div className="tabs" onClick={props.toggleFunction}>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
