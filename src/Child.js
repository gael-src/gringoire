import React from "react";
import "./App.css";

const Child = (props) => {
	return (
		<a className="links" href={props.link} target="_blank">
			{props.name}
		</a>
	);
};

export default Child;
