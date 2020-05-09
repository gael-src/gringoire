import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

const data = [
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "mozilla.org/intro ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "1111111111111 ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "2222222222222 ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "3333333333333 ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		name: "4444444444444 ",
	},
];

class App extends Component {
	state = {
		title: "",
	};
	changeTitle = (event) => {
		console.log(event.target);
		this.setState({ title: event.target.value });
	};
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				{data.map((element) => {
					return <Child link={element.link} name={element.name} />;
				})}
				<form className="submitForm">
					<input type="text" />
					<input type="submit" onSubmit={this.changeTitle} />
				</form>
			</div>
		);
	}
}
export default App;
