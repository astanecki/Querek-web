import React from 'react';

module.exports = React.createClass({

    /**
     * @function
     * @returns {*}
     */
    generateClassName() {
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
    render() {
        return (
            <div
                className={this.generateClassName()}>
                {this.props.platform.toUpperCase()}
            </div>
        );
    }
});