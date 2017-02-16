import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Counter } from '../state/counter.state';

interface Props {
    counter: Counter;
}
@observer
class RenderCounter extends React.Component<Props, {}> {
    render() {
        const counter = this.props.counter;
        return (
            <div>{counter.count}</div>
        );
    }
}

export { RenderCounter };