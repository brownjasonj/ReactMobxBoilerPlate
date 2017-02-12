import * as mobx from 'mobx';
import { observable, computed, action } from 'mobx';

class Counter {
    @observable private _count: number;

    constructor() {
        this._count = 0;
    }

    public increment() {
        this._count++;
    }

    get count() {
        return this._count;
    }
}

class TodoItem {
    @observable private _taskName : string;
	@observable private _completed: boolean;
	@observable private _assignee: string;
    @observable private _counter: Counter;

    constructor(task="No Name", completed=false, assignee="unassigned") {
        this._taskName = task;
        this._completed = completed;
        this._assignee = assignee;
        this._counter = new Counter();
    }

    set task(taskname: string) {
        this._taskName = taskname;
        this._counter.increment();
    }

    @computed
    get task() {
        return this._taskName;
    }

    set completed(flag: boolean) {
        this._completed = flag;
        this._counter.increment();
    }

    @computed
    get completed() {
        return this._completed;
    }

    set assignee(assignee: string) {
        this._assignee = assignee;
        this._counter.increment();
    }

    get counter() {
        return this._counter;
    }
}


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

export { observableTodoStore as todoStore, ObservableTodoStore, TodoItem, Counter}
                        