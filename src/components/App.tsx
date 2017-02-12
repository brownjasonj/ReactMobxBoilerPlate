import * as React from 'react'

import { todoStore,  ObservableTodoStore} from '../state/todos.state';
import { TodoList } from './todolist.component';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        todoStore.addTodo("read MobX tutorial");

        todoStore.addTodo("try MobX");

        todoStore.todos[0].completed = true;

        todoStore.todos[1].task = "try MobX in own project";

        todoStore.todos[0].task = "grok MobX tutorial";

        return (
            <TodoList />
        );
    }
}

export { App };