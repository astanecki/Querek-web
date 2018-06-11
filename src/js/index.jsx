import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './components/app/AppContainer.js';
import reducers from './reducers';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import "../style/style.scss";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => (
    <MuiThemeProvider>
        <AppContainer />
    </MuiThemeProvider>
);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app-container')
);