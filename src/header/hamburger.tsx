import "./hamburger.scss";

function Line(props) {
  return <div className={`line ${props.class}`} />;
}

export default function Hamburger(props) {
  return (
    <div className="box" onClick={props.toggleFunction}>
      <Line class={props.toggleStatus ? "top-bun-active" : ""} />
      <Line class={props.toggleStatus ? "bottom-bun-active" : ""} />
    </div>
  );
}
