import React from 'react';
import Config from './Config.jsx';
import QRCode from '../libs/QrCode.jsx';

/**
 * Draws QRCode with given version
 *
 * @type {Object}
 */
module.exports = React.createClass({

    /**
     *
     */
    width: 128,

    /**
     *
     */
    height: 128,

    /**
     * @function
     * @returns {String}
     */
    getCodeText: function () {
        return Config.NETWORK.SERVER_IP+ '/app?type=' + this.props.type + '&version=' + this.props.version;
    },

    /**
     * @function
     */
    componentDidMount: function () {
        console.log('componentDidMount()');

        new QRCode(this.refs.codeElement, {
            text: this.getCodeText(),
            width: this.width,
            height: this.height
        });
    },

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        console.log('render()');

        return (
            <div ref="codeElement"
                 className='card-code'
                 data-version={this.props.version}
                 data-type={this.props.type}>
            </div>
        );
    }
});