import React from 'react';
import Card from '../card/Card.jsx'
import Dialog from '../dialog/Dialog.jsx';
import EmptyReleaseCard from '../emptyCard/EmptyReleaseCard.jsx';
import EmptyDeveloperCard from '../emptyCard/EmptyDeveloperCard.jsx';
import {Tab, Tabs}  from 'material-ui';

const style = {
    fontFamily: 'consolas',
    backgroundColor: '#4f5357'
};
/**
 * Draws QRCode with given version
 *
 * @type {Object}
 */
module.exports = React.createClass({

    /**
     * @function
     */
    getInitialState() {
        return {
            value: 'release',
            isDialogOpened: false,
            dialogTitle: '',
            defaultName: '',
            dialogMode: ''
        };
    },

    /**
     * @function
     */
    addNewReleaseVersion() {
        this.setState({
            isDialogOpened: !this.state.isDialogOpened,
            dialogTitle: 'New release version',
            defaultName: ''
        });
    },

    /**
     * @function
     */
    addNewDeveloperVersion() {
        this.setState({
            isDialogOpened: !this.state.isDialogOpened,
            dialogTitle: 'New develop version',
            defaultName: ''
        });
    },

    /**
     * @function
     */
    onDialogClose() {
        this.setState({ isDialogOpened: false });
    },

    /**
     * @function
     */
    handleChange(value) {
        this.setState({ value });
    },

    /**
     * @function
     */
    onDeletedSuccess() {
        this.props.fetchApps();
    },

    /**
     * @returns {XML}
     */
    render: function () {
        return (
            <div>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}>

                    <Tab
                        style={style}
                        label="Release"
                        value="release">
                        <div>
                            <EmptyReleaseCard
                                onAddClick={this.addNewReleaseVersion}/>

                            {this.props.codes.release.map(code => {
                                return (
                                    <Card
                                        fetchApps={this.props.fetchApps}
                                        deleteApp={this.props.deleteApp}
                                        key={code._id}
                                        code={code} />
                                );
                            })}
                        </div>
                    </Tab>

                    <Tab
                        style={style}
                        label="Developer"
                        value="developer">
                        <div>
                            <EmptyDeveloperCard
                                onAddClick={this.addNewDeveloperVersion}/>

                            {this.props.codes.developer.map(code => {
                                return (
                                    <Card
                                        fetchApps={this.props.fetchApps}
                                        deleteApp={this.props.deleteApp}
                                        key={code._id}
                                        code={code} />
                                );
                            })}
                        </div>
                    </Tab>
                </Tabs>

                <Dialog
                    type={this.state.value}
                    title={this.state.dialogTitle}
                    defaultName={this.state.defaultName}
                    open={this.state.isDialogOpened}
                    fetchApps={this.props.fetchApps}
                    createApp={this.props.createApp}
                    onClose={this.onDialogClose}/>
            </div>
        );
    }
});