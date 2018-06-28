import React from 'react';

import config from '../../config/config.jsx';

import TopBar from '../topBar/TopBar.jsx';
import Loader from '../loader/Loader.jsx';
import Dialog from '../dialog/Dialog.jsx';
import Tabs from '../tabs/Tabs.jsx';

module.exports = React.createClass({

    componentDidMount() {
        this.props.fetchApps();
    },

    render() {
        const {
            clickEmptyCard,
            closeDialog,
            fetchApps,
            deleteApp,
            createApp,
            changeTab,
            app: { release, developer },
            ui: { isDialogOpened, loader, activeTab }
        } = this.props;

        return (
            <div className='app'>
                <TopBar
                    title={config.APP.TITLE}/>

                <Loader
                    isVisible={loader} />

                <Tabs
                    release={release}
                    developer={developer}
                    activeTab={ activeTab }

                    fetchApps={ fetchApps }
                    deleteApp={ deleteApp }
                    changeTab={ changeTab }
                    clickEmptyCard={ clickEmptyCard }
                />

                <Dialog
                    type={activeTab}
                    isOpened={isDialogOpened}
                    createApp={createApp}
                    onClose={closeDialog}/>
            </div>
        );
    }
});