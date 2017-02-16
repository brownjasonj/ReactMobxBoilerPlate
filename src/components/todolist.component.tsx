import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

import { TodoView } from './todoview.component';
import { ObservableTodoStore } from '../state/todos.state';
import { TodoItem } from '../state/todo-item.state';

interface Props {
  store?: ObservableTodoStore;
}

@inject("store")
@observer
class TodoList extends React.Component<Props, {}> {
  render() {
    const store = this.props.store;
    return (
      <div>
        <Devtools />
        { store.report }
        <ul>
        { store.todos.map((todo: TodoItem, idx: any) => <TodoView todo={ todo } key={ idx } />) }
        </ul>
        { store.pendingRequests > 0 ? <div>Loading...</div> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

export { TodoList };