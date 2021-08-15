import React, { Component } from "react";

//Ana componentten gelen tasklar map metodu ile ekranda listelenir.
export default class ToDoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => {
          return (
            <div key={task.id}>
              <li
                className={task.done ? "done" : ""}
                //Propstan gelen drawToDo metodu ile silme işlemi gerçekleştirilir.
                onClick={() => this.props.drawToDo(task.name)}
              >
                {task.name}
              </li>
              //Silme işlemini gerçekleştiren metot props dan gelen metot ile tetikleme işlemi gerçekleştirilir.
              <button onClick={() => this.props.removeToDo(task.name)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}
