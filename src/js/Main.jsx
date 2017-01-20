/** @jsx React.DOM */
var React   = require('react');

var Api = require('./Api.jsx');

var TopBar  = require('./TopBar.jsx');
var Loader  = require('./Loader.jsx');
var TabVersions = require('./TabVersions.jsx');

var config = require('./Config.jsx');

module.exports = React.createClass({

    /**
     * @function
     * @returns {Object}
     */
    getInitialState: function () {
        this.listenOnCodes();

        return {
            codes: {
                release: [],
                developer: []
            },
            isMenuOpened: false,
            newReleaseCode: null,
            newDeveloperCode: null,
            loaderStatus: config.LOADER.SHOWN
        };
    },

    /**
     * @function
     */
    listenOnCodes: function () {
        var self = this;

        Api.connect(function (codes) {
            console.log('Available versions: ', codes);

            self.setState({
                loaderStatus: config.LOADER.HIDDEN,
                codes: codes
            });
        });

        Api.listenOnRelease(function (code) {
            console.log('New release version: ', code);

            self.setState({
                newReleaseCode: code
            });
        });

        Api.listenOnDeveloper(function (code) {
            console.log('New developer version: ', code);

            self.setState({
                newDeveloperCode: code
            });
        });
    },

    /**
     * @function
     */
    componentDidMount: function () {
        console.log('All cards mount!');
    },

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <div className='app'>
                <TopBar
                    onAddClick={this.onAddClick}
                    title={config.APP.TITLE}/>

                <Loader
                    loaderStatus={this.state.loaderStatus} />

                <TabVersions
                    codes={this.state.codes}
                    newReleaseCode={this.state.newReleaseCode}
                    newDeveloperCode={this.state.newDeveloperCode}
                    />
            </div>
        );
    }
});