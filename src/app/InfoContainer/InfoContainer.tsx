"use client";
import { useState } from "react";
import { Tabs } from "../types";
import Tab from "./Tab";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import styles from "../page.module.scss";

const InfoContainer = (): JSX.Element => {
  const [picked, setPicked] = useState(0);

  const selectTab = (tab: Tabs) => {
    return () => setPicked(tab);
  };

  const aboutMe = {
    header: "About Me",
    picked: picked === Tabs.AboutMe,
    onClick: selectTab(Tabs.AboutMe),
  };

  const projects = {
    header: "Projects",
    picked: picked === Tabs.Projects,
    onClick: selectTab(Tabs.Projects),
  };

  const contactMe = {
    header: "Contact",
    picked: picked === Tabs.ContactMe,
    onClick: selectTab(Tabs.ContactMe),
  };

  let info;
  switch (picked) {
    case Tabs.AboutMe:
      info = <AboutMe />;
      break;
    case Tabs.Projects:
      info = <Projects />;
      break;
    case Tabs.ContactMe:
      info = <ContactMe />;
      break;
  }

  return (
    <>
      <div className={styles.infoTabContainer}>
        <Tab {...aboutMe} />
        <Tab {...projects} />
        <Tab {...contactMe} />
      </div>
      <div className={styles.infoContainer}>{info}</div>
    </>
  );
};

export default InfoContainer;
