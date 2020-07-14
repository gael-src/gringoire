import React from "react";
import "./App.css";

const Child = (props) => {
  return (
    <li className="li-links">
      <a className="links" href={props.link} target="_blank">
        {props.title} test
      </a>
    </li>
  );
};

export default Child;
