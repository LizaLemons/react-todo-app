
import React, { Component } from 'react';

class AddTask extends Component {
  render(){
    return(
      <div>
        <h3>Add Task Component</h3>
        <input type="text"
          onChange={this.props.handleTextInput}
          onKeyDown={this.props.handleEnterKey}
          value={this.props.newItemText}
        />
      </div>
    );
  }
}

export default AddTask;
