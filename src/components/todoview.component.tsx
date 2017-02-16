import * as React from 'react';
import { observer } from 'mobx-react';

import { RenderCounter } from './counter.component';
import { TodoItem } from '../state/todo-item.state';

interface Props {
  todo: TodoItem
}
@observer
class TodoView extends React.Component<Props, {}> {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input type='checkbox' checked={ todo.completed } onChange={ this.onToggleCompleted } />
        { todo.task }
        { todo.assignee? <small>{ todo.assignee }</small>: null}
        <RenderCounter counter={ todo.counter } />
      </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

export { TodoView };