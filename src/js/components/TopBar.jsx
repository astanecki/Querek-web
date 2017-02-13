var React   = require('react');
var AppBar  = require('material-ui').AppBar;
var FlatButton  = require('material-ui').FlatButton;

module.exports = React.createClass({

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <AppBar
                title={this.props.title}/>
        );
    }
});