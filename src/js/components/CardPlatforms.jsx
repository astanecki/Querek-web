import React from 'react';
import CardPlatform from './CardPlatform.jsx';

module.exports = React.createClass({

    /**
     * @type {Array.<String>}
     */
    platforms: ["android", "ios"],

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <div>
                {this.platforms.map(function(platform) {
                    if (this.props.platforms.indexOf(platform) > -1) {
                        return <CardPlatform
                            key={platform}
                            enabled={true}
                            platform={platform} />
                    } else {
                        return <CardPlatform
                            key={platform}
                            disabled={true}
                            platform={platform} />
                    }
                }.bind(this))}
            </div>
        );
    }
});