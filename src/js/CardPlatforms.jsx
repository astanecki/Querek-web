var React   = require('react');
var CardPlatform = require('./CardPlatform.jsx');

module.exports = React.createClass({

    platforms: ["android", "ios"],

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