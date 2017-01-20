/** @jsx React.DOM */
var React   = require('react');
var RefreshIndicator  = require('material-ui').RefreshIndicator;

module.exports = React.createClass({

    render: function () {
        return (
            <div
                className='loader-container'>
                <RefreshIndicator
                    size={70}
                    // required by material-ui
                    left={10}
                    top={10}
                    status={this.props.loaderStatus}
                    />
            </div>
        );
    }
});