
import React, { Component } from 'react';

class TaskList extends Component {

  render(){
    return(
      <div>
        <h3>Task List Component</h3>

        <div>
        {this.props.taskList.map((task, index) =>
          <p key={index}>
            <input type="checkbox"
              name={index}
              onChange={this.props.handleCheckbox}
              checked={task.isChecked}
            />

            <label htmlFor={index}>{task.text}</label>

            <button
              onClick={this.props.handleDeleteTodoItem}
              name={index}
            >Delete</button>
          </p>
        )}
        </div>
      </div>
    );
  }
}

export default TaskList;
