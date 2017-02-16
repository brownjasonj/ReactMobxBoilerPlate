import * as React from 'react'
import { TodoList } from './todolist.component';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <TodoList />
        );
    }
}

export { App };