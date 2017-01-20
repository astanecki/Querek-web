/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./Main.jsx');

// makes possible to close dialog by clicking on the background
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

require("../style/style.scss");

ReactDOM.render(
    <Main />,
    document.getElementById('app-container')
);