import React from 'react';
import {AppBar, FlatButton} from 'material-ui';

const style = {
    fontFamily: 'consolas',
    backgroundColor: '#24292e'
};

module.exports = React.createClass({

    /**
     * @function
     * @returns {XML}
     */
    render() {
        return (
            <AppBar
                style={style}
                showMenuIconButton={false}
                title={this.props.title}/>
        );
    }
});