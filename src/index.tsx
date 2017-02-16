// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

// Import our App container (which we will create in the next step)
import { App } from './components/App';
import { todoStore } from './state/todos.state';
import load from './load';
load(todoStore);

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get the root element from the HTML
const rootEl = document.getElementById('app');

const renderApp = (app: any) => {
  render(
      <Provider store={ todoStore }>
        {app}
      </Provider>,
    rootEl
  );
};

renderApp(<App/>); 

// And render our App into it, inside the HMR App ontainer which handles the hot reloading

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./components/App').App;

    // And render it into the root element again
    renderApp(<NextApp/>);
  })
}