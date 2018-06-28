import React from 'react';
import Config from '../../config/config.jsx';
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
        const {
            type,
            version
        } = this.props;

        console.log('render()', version);

        return (
            <div ref="codeElement"
                 className='card-code'
                 data-version={version}
                 data-type={type}>
            </div>
        );
    }
});