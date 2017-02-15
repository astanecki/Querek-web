import React from 'react';
import {AppBar, FlatButton} from 'material-ui';

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