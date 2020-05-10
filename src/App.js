import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

const data = [
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		description: "mozilla.org/intro ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		description: "1111111111111 ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		description: "2222222222222 ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		description: "3333333333333 ",
	},
	{
		link:
			"https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
		description: "4444444444444 ",
	},
];

class App extends Component {
	state = {
		description: "",
		link: "",
	};
	handleChange = (event) => {
		console.log(event.target.name);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div className="mainBody">
				<a className="links" href={this.state.link} target="_blank">
					{this.state.description}
				</a>

				{/* {data.map((element) => {
					return <Child link={element.link} name={element.name} />;
				})} */}
				<form className="formContainer">
					<legend className="formLegend">Add Link</legend>
					<label className="formLabel" for="description">
						Description:
					</label>
					<input
						className="formInput"
						value={this.state.description}
						name="description"
						type="text"
						required
						onChange={this.handleChange}
					/>
					<label className="formLabel" for="link">
						Link:
					</label>
					<input
						className="formInput"
						value={this.state.link}
						name="link"
						type="text"
						required
						onChange={this.handleChange}
					/>
					<input
						className="formButton"
						type="submit"
						onSubmit={this.changeTitle}
					/>
				</form>
			</div>
		);
	}
}
export default App;
