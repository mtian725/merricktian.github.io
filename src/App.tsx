import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header/header";
import Home from "./home/home";
import Career from "./career/career";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Career">
          <Career />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
