import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import "../style/style.scss";

const App = () => (
    <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>
);


ReactDOM.render(
    <App />,
    document.getElementById('app-container')
);