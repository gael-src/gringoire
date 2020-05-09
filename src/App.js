import React from "react";
import Child from "./Child";
import "./App.css";

const data = [
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "mozilla.org/Getting_started_with_the_web",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "mozilla.org/ref",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "mozilla.org/Getting_started_with_the_web",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "mozilla.oed_with_the_web",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "mozilla.org/Getting_st_web",
	},
];

function App() {
	return (
		<div>
			<h1>Hello Human</h1>
			<Child link={data[0].link} name={data[0].name} />
			<Child link={data[1].link} name={data[1].name} />
			<Child link={data[2].link} name={data[2].name} />
			<Child link={data[3].link} name={data[3].name} />
			<Child link={data[4].link} name={data[4].name} />
		</div>
	);
}

export default App;
