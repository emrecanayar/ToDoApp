import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";


//Ana component
export default class ToDoApp extends Component {
  
  //State içerisinde tanıumlanan default veriler.
  state = {
    tasks: [
      { id: 1, name: "task1", done: false },
      { id: 2, name: "task2", done: false },
      { id: 3, name: "task3", done: false },
    ],
  };

  //Ekleme işlkemini gerçekleştiren fonksiyon parametre olarak gelen veriye göre kontrol yapar ve ekleme işlemini gerçekleştirir.
  addToDo = (newInput) => {
    if (newInput === "") {
      alert("Görev girmeyi unuttunuz!");
    } else if (this.state.tasks.find((task) => task.name === newInput)) {
      alert("Bu görevi daha önce eklediniz!");
    } else {
      const newTask = { id: uuidv4(), name: newInput, done: false };
      this.setState({
        tasks: [...this.state.tasks, newTask],
      });
    }
  };

  //Görev silme işlemini gerçekleştiren metot. Gerçek veri olmadığı için filter metodu ile işlem yapılmaktadır.
  removeToDo = (name) => {
    const filterArray = this.state.tasks.filter((task) => task.name !== name);
    this.setState({
      tasks: filterArray,
    });
  };

  //Yapılan görevin üstünü çizmek için oluşturulan metotdur. State te bulunan done propertysinin true yada false olmasına göre çizgi çizilir.

  drawToDo = (name) => {
    const draw = this.state.tasks.map((task) => {
      if (task.name === name) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({
      tasks: draw,
    });
  };

  render() {
    return (
      <div>
        {/* Görev eklemek için oluşturulan component , props olarak ekleme işlemini yapacak olan fonksiyon gönderilir. */}
        <ToDo addToDo={this.addToDo} />
        
        {/* Taskleri listelemek için , Listelenen tasklari silmek için ve yapılan görevlerin üstünü çizmek için oluşturulan component */}
        <ToDoList
          tasks={this.state.tasks}
          removeToDo={this.removeToDo}
          drawToDo={this.drawToDo}
        />
      </div>
    );
  }
}
