import "./hamburger.scss";
import { HeaderProps } from "./headerPropTypes";

function Line(props: HeaderProps) {
  return <div className={`line ${props.class}`} />;
}

export default function Hamburger(props: HeaderProps) {
  return (
    <div className="box" onClick={props.toggleFunction}>
      <Line class={props.toggleStatus ? "top-bun-active" : ""} />
      <Line class={props.toggleStatus ? "bottom-bun-active" : ""} />
    </div>
  );
}
