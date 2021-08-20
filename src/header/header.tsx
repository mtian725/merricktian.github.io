import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hamburger from "./hamburger";
import NavOverlay from "./navOverlay";
import "./header.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Header() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [toggle, setToggle] = useState(false);

  function toggleBurger() {
    setToggle(!toggle);
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let components;
  if (windowDimensions.width > 600) {
    components = (
      <div className="header">
        <div className="material-icons home">
          <Link to="/">home</Link>
        </div>
        <div className="filler"></div>
        <div className="tabs">
          <Link to="/Career">Career</Link>
        </div>
        <div className="tabs">
          <Link to="/Projects">Projects</Link>
        </div>
        <div className="tabs">
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    );
  } else {
    components = (
      <div>
        <div className="header">
          <div className="material-icons home" onClick={() => setToggle(false)}>
            <Link to="/">home</Link>
          </div>
          <div className="filler"></div>
          <Hamburger toggleStatus={toggle} toggleFunction={toggleBurger} />
        </div>
        <NavOverlay toggleStatus={toggle} toggleFunction={toggleBurger} />
      </div>
    );
  }

  // Don't need to add <a> components because <Link>
  // is build ontop of them, so the css for <a> will
  // still apply
  return components;
}
