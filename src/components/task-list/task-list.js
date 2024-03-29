import React from 'react';

import Task from '../task';
import './task-list.css';

function TaskList({ todos, filter, onDeleted, onToggleCompleted, onEdit, onTaskAdded }) {
  let elems;

  const taskTemplate = () => {
    elems = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <Task
          {...itemProps}
          key={item.id}
          onDeleted={() => onDeleted(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
          onEdit={() => onEdit(id)}
          onTaskAdded={(text, time) => onTaskAdded(text, time)}
        />
      );
    });
  };

  if (filter === 'all') {
    taskTemplate();
  }

  if (filter === 'active') {
    todos = todos.filter((el) => !el.completed);

    taskTemplate();
  }

  if (filter === 'completed') {
    todos = todos.filter((el) => el.completed);

    taskTemplate();
  }

  return <ul className="todo-list">{elems}</ul>;
}

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleCompleted: () => {},
  filter: 'all',
};

TaskList.propTypes = {
  filter: (props, propName, componentName) => {
    const value = props[propName];

    if (value === 'all' || value === 'active' || value === 'completed') {
      return null;
    }
    return new Error(`${componentName}: Неправильное значение фильтра ${propName}: ${value}!!!`);
  },
};

export default TaskList;
