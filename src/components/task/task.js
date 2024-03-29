import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../timer';

import './task.css';

export default class Task extends Component {
  state = {
    inputValue: this.props.description,
    created: this.props.created,
  };

  static defaultProps = {
    classname: 'active',
    onDeleted: () => {},
    onToggleCompleted: () => {},
    completed: false,
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onTaskAdded(this.state.inputValue, this.state.created);
    this.props.onDeleted();
  };

  render() {
    const { description, created, onDeleted, onEdit, onToggleCompleted, completed, editing } = this.props;
    let classNames = 'active';

    if (completed) {
      classNames = 'completed';
    }
    if (editing) {
      classNames = 'editing';
    }

    if (classNames === 'editing') {
      return (
        <li className={classNames}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <div className="timer-block">
                <span className="title">{description}</span>
                <Timer />
              </div>
              <span className="created">created {formatDistanceToNow(created)} ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
          <form className="new-todo-form" onSubmit={this.onSubmit}>
            <input type="text" className="edit" onChange={this.onInputChange} value={this.state.value} />
          </form>
        </li>
      );
    } else {
      return (
        <li className={classNames}>
          <div className="view">
            <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
            <label>
              <div className="timer-block">
                <span className="title">{description}</span>
                <Timer />
              </div>
              <span className="created">created {formatDistanceToNow(created)} ago</span>
            </label>
            <button className="icon icon-edit" onClick={onEdit}></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
        </li>
      );
    }
  }
}
