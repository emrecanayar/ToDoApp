import React, { Component } from "react";

export default class ToDo extends Component {
  state = {
    input: "",
  };

  //İnput alanına girien değeri state içerisindeki input değerine atar.
  changeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  //Form submit edilidğinde ilgili addToDo metodunu çalıştırır.
  submitHandler = (e) => {
    this.props.addToDo(this.state.input);
    this.setState({
      input: "",
    });
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.changeHandler}
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}
