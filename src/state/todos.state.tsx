import * as mobx from 'mobx';
import { observable, computed, action } from 'mobx';

import { TodoItem } from './todo-item.state';

class ObservableTodoStore {
	@observable todos: TodoItem[] = [];
    @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(taskName : string) {
		this.todos.push(new TodoItem(taskName));
	}
}


const observableTodoStore = new ObservableTodoStore();

export { observableTodoStore as todoStore, ObservableTodoStore }
                        