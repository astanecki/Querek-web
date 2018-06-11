import React from 'react';
import Config from '../../config/Config.jsx';
import QRCode from '../../../libs/QrCode.jsx';

/**
 * Draws QRCode with given version
 *
 * @type {Object}
 */
module.exports = React.createClass({

    /**
     * @type {Number}
     */
    width: 128,

    /**
     * @type {Number}
     */
    height: 128,

    /**
     * @function
     * @returns {String}
     */
    getCodeText() {
        return `${Config.NETWORK.SERVER_IP}/applications/${this.props.type}/${this.props.version}`;
    },

    /**
     * @function
     */
    componentDidMount() {
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
    render() {
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