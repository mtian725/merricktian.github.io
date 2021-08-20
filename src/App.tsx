import logo from "./logo.svg";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header/header";
import Home from "./home/home";
import Career from "./career/career";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

import "./App.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Header windowDimensions={windowDimensions} />

      <Switch>
        <Route exact path="/">
          <Home windowDimensions={windowDimensions} />
        </Route>
        <Route exact path="/Career">
          <Career windowDimensions={windowDimensions} />
        </Route>
        <Route exact path="/Projects">
          <Projects windowDimensions={windowDimensions} />
        </Route>
        <Route exact path="/Contact">
          <Contact windowDimensions={windowDimensions} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
