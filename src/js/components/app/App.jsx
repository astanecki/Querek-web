import React from 'react';

import config from '../../config/Config.jsx';

import TopBar from '../topBar/TopBar.jsx';
import Loader from '../loader/Loader.jsx';
import TabVersions from '../tabs/TabVersions.jsx';

module.exports = React.createClass({

    /**
     * @function
     * @returns {Object}
     */
    getInitialState: function () {
        this.fetchApps();

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
    fetchApps() {
        this.props.fetchApps()
            .then(({ payload }) => {
                console.log('fetch()', payload.data);

                this.setState({
                    loaderStatus: config.LOADER.HIDDEN,
                    codes: payload.data
                });
            });
    },

    /**
     * @function
     * @returns {XML}
     */
    render() {
        const {
            deleteApp,
            createApp
        } = this.props;

        return (
            <div className='app'>
                <TopBar
                    title={config.APP.TITLE}/>

                <Loader
                    loaderStatus={this.state.loaderStatus} />

                <TabVersions
                    codes={this.state.codes}
                    newReleaseCode={this.state.newReleaseCode}
                    newDeveloperCode={this.state.newDeveloperCode}
                    fetchApps={ () => this.fetchApps() }
                    deleteApp={ deleteApp }
                    createApp={ createApp }
                    />
            </div>
        );
    }
});