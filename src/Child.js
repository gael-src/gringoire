import React from "react";

const Child = (props) => {
	return (
		<a href={props.link} target="_blank">
			{props.name}
		</a>
	);
};

export default Child;
