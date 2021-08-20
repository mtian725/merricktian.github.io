import { useState } from "react";

import "./contact.scss";

export default function Contact(props: {
  windowDimensions: { width: Number; height: number };
}) {
  const [copyMessage, setCopyMessage] = useState("Copy");

  function copy(item: string) {
    navigator.clipboard.writeText(item);
    setCopyMessage("Copied");
  }

  function resetMessage() {
    setCopyMessage("Copy");
  }

  const classNames = {
    titleOne: "title-one",
    titleTwo: "title-two",
    icon: "material-icons icon",
    contactInfo: "contact-info",
    tag: "tag",
  };

  if (props.windowDimensions.width < 800) {
    classNames.titleOne = "title-one-sm";
    classNames.titleTwo = "title-two-sm";
    classNames.icon = "material-icons icon-sm";
    classNames.contactInfo = "contact-info-sm";
    classNames.tag = "tag-sm";
  }

  /* Below not used because not necesarry, but if more contact items 
  are added then, just the data structure and .map() through it

  const contactItems = {
    email: "mtian725@gmail.com",
  };
  */

  return (
    <div className="contact-container-helper">
      <div className="contact-container">
        <div className="title-box">
          <div className={classNames.titleOne}>Looking to reach out to me?</div>
          <div className={classNames.titleTwo}>
            I'd Love To Connect With You
          </div>
        </div>

        <div className="contact-content-container">
          <div
            className="contact-item-container"
            onClick={() => copy("mtian725@gmail.com")}
            onMouseOut={resetMessage}
          >
            <div className="underline">
              <div className={classNames.icon}>email</div>
              <div className={classNames.contactInfo}>mtian725@gmail.com</div>
            </div>
            <div className={classNames.tag}>{copyMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
