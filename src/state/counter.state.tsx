import { observable } from 'mobx';

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

export { Counter };