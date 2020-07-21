import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

const data = [
  {
    id: "111sdfg",
    title: "mozilla.org/intro 111 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    id: "222sdfg",
    title: "mozilla.org/intro 222 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    id: "333sdfg",
    title: "mozilla.org/intro 333 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    id: "444sdfg",
    title: "mozilla.org/intro 444 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
  {
    id: "555sdfg",
    title: "mozilla.org/intro 555 ",
    link:
      "https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web",
  },
];

class App extends Component {
  state = {
    id: "",
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
        <a
          className="links"
          href={this.state.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.title}
        </a>
        {data.map((element) => {
          return <Child link={element.link} title={element.title} />;
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
