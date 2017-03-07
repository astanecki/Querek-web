import React from 'react';
import {AppBar, FlatButton} from 'material-ui';

const  style = {
    fontFamily: 'consolas',
    backgroundColor: '#24292e'
};

module.exports = React.createClass({

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <AppBar
                style={style}
                title={this.props.title}/>
        );
    }
});