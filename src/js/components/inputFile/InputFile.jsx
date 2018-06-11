import React from 'react';
import {FlatButton, RaisedButton} from 'material-ui';

const button = {margin: 12};
const exampleImageInput = {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
    };

/**
 * Draws QRCode with given version
 *
 * @type {Object}
 */
module.exports = React.createClass({

    /**
     * @function
     * @returns {XML}
     */
    render() {
        console.log('render()');

        return (
            <RaisedButton
                label={this.props.name}
                style={button}
                labelPosition={'before'}
                >
                <input
                    type="file"
                    className={this.props.class}
                    style={exampleImageInput}
                    onChange={this.props.changeCallback}
                    />
            </RaisedButton>
        );
    }
});

