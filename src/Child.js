import React from "react";
import "./App.css";

const Child = (props) => {
  return (
    <li className="li-links">
      <a
        className="links"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </li>
  );
};

export default Child;
