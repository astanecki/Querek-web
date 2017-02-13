import React from 'react';

module.exports = React.createClass({

    /**
     * @function
     * @returns {*}
     */
    generateClassName: function () {
        if (this.props.enabled) {
            return 'code-platform code-platform-enabled';
        } else {
            return 'code-platform code-platform-disabled';
        }
    },

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <div
                className={this.generateClassName()}>
                {this.props.platform.toUpperCase()}
            </div>
        );
    }
});