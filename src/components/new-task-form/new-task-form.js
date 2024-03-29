import React, { Component } from 'react';
// import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onTaskAdded(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onInputChange}
          value={this.state.inputValue}
        />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        <button type="submit"></button>
      </form>
    );
  }
}

// const NewTaskForm  = () => {
//     return (
//         <form>
//             <input className="new-todo"
//                    placeholder="What needs to be done?"
//                    autoFocus
//                    onChange={ this.onInputChange }
//             />

//         </form>
//     );
// };

// export default NewTaskForm ;
