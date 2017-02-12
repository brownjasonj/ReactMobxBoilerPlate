import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Counter } from '../state/counter.state';

@observer
class RenderCounter extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
    }

    render() {
        const counter: Counter = this.props.counter;
        return (
            <div>{counter.count}</div>
        );
    }
}

export { RenderCounter };