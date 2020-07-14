import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

const data = [
  {
    title: "mozilla.org/intro ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    title: "1111111111111 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    title: "2222222222222 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    title: "3333333333333 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    title: "4444444444444 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
];

class App extends Component {
  state = {
    title: "",
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
          {this.state.title}
        </a>

        {data.map((element) => {
          return <Child link={element.link} name={element.title} />;
        })}
        <form className="formContainer">
          <legend className="formLegend">Add Link</legend>
          <label className="formLabel" htmlFor="title">
            title:
          </label>
          <input
            className="formInput"
            value={this.state.title}
            name="title"
            type="text"
            required
            onChange={this.handleChange}
          />
          <label className="formLabel" htmlFor="link">
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
