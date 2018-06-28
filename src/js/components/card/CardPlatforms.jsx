import React from 'react';

import CardPlatform from './CardPlatform.jsx';
import CONFIG from '../../config/config.jsx';

module.exports = React.createClass({
    /**
     * @function
     * @returns {XML}
     */
    render() {
        return (
            <div>
                {CONFIG.SUPPORTED_PLATFORMS.map(({ name }) => {
                    return <CardPlatform
                        key={name}
                        enabled={this.props.platforms.indexOf(name) > -1}
                        platform={name} />

                })}
            </div>
        );
    }
});