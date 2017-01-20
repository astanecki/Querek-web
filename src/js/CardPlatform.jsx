/** @jsx React.DOM */
var React   = require('react');

module.exports = React.createClass({

    generateClassName: function () {
        if (this.props.enabled) {
            return 'code-platform code-platform-enabled';
        } else {
            return 'code-platform code-platform-disabled';
        }
    },

    render: function () {
        return (
            <div
                className={this.generateClassName()}>
                {this.props.platform.toUpperCase()}
            </div>
        );
    }
});