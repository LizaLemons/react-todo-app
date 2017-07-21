
import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

import update from 'immutability-helper';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      newItemText: '',
      taskList: [
        {text: "This item is complete by default!", isChecked: true},
        {text: "Take out the trash", isChecked: false},
        {text: "Call mom", isChecked: false}
      ]
    }
  }


  // when user types in input box
  handleTextInputFxn = (event) => {
    this.setState({
      newItemText: event.target.value
    });
  }


  // when user presses 'enter' to submit new todo task
  handleEnterKeyFxn = (event) => {
    const ENTER_KEY = 13;

    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var newTodoItemText = this.state.newItemText.trim();

    if(newTodoItemText){
      // create the new obj
      var newItem = {
        text: newTodoItemText,
        isChecked: false
      };

      // then add it to taskList[]
      this.setState((prevState) => ({
        taskList: prevState.taskList.concat(newItem),
        newItemText: ''
      }));

    } // endif
  } // end handleEnterKeyFxn


  // when user toggles a checkbox
  handleCheckboxFxn = (event) => {
    // the todo item's ID is hidden in the 'name' attr of the checkbox
    let itemID = parseInt(event.target.name, 10);

    // update the 'isChecked' val of that todo item.
    // Here we have to use 'update' of 'immutability-helper'
    // because we're updating only a piece of state
    this.setState({
      taskList: update(this.state.taskList, {
        [itemID]: {
          isChecked: {$set: !this.state.taskList[itemID].isChecked}
        }
      })
    });
  }


  // when user deletes a todo item
  handleDeleteTodoItemFxn = (event) => {
    let indexOfOneToDelete = event.target.name;
    this.setState({
      taskList: update(this.state.taskList, {$splice: [[ indexOfOneToDelete, 1 ]]})
    });
  }


  render() {
    let todoListName = "Thursday Todo List";

    return (
      <div className="App">
        <h1>{todoListName}</h1>
        <hr />
        <AddTask
          handleTextInput={this.handleTextInputFxn}
          handleEnterKey={this.handleEnterKeyFxn}
          newItemText={this.state.newItemText}
        />
        <hr />
        <TaskList
          taskList={this.state.taskList}
          handleCheckbox={this.handleCheckboxFxn}
          handleDeleteTodoItem={this.handleDeleteTodoItemFxn}
        />
      </div>
    );
  }
}

export default App;
