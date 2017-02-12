import { observable, computed} from 'mobx';

import { Counter } from './counter.state';

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

export { TodoItem }