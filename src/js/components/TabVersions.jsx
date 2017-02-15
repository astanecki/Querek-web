import React from 'react';
import Card from './Card.jsx'
import Dialog from './Dialog.jsx';
import EmptyReleaseCard from './EmptyReleaseCard.jsx';
import EmptyDeveloperCard from './EmptyDeveloperCard.jsx';
import {Tab, Tabs}  from 'material-ui';

/**
 * Draws QRCode with given version
 *
 * @type {Object}
 */
module.exports = React.createClass({

    /**
     * @function
     */
    getInitialState: function () {
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
    addNewReleaseVersion: function () {
        this.setState({
            isDialogOpened: !this.state.isDialogOpened,
            dialogTitle: 'Dodaj wersję releasową',
            defaultName: 'v'
        });
    },

    /**
     * @function
     */
    addNewDeveloperVersion: function () {
        this.setState({
            isDialogOpened: !this.state.isDialogOpened,
            dialogTitle: 'Dodaj wersję developerską',
            defaultName: 'v'
        });
    },

    /**
     * @function
     */
    onDialogClose: function () {
        this.setState({
            isDialogOpened: false
        });
    },

    /**
     * @function
     */
    handleChange: function (value) {
        this.setState({
            value: value
        });
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
                        label="Release"
                        value="release">
                        <div>
                            <EmptyReleaseCard
                                onAddClick={this.addNewReleaseVersion}/>

                            {this.props.codes.release.map(function (code) {
                                return (
                                    <Card
                                        key={code._id}
                                        code={code} />
                                );
                            })}
                        </div>
                    </Tab>

                    <Tab
                        label="Developer"
                        value="developer">
                        <div>
                            <EmptyDeveloperCard
                                onAddClick={this.addNewDeveloperVersion}/>

                            {this.props.codes.developer.map(function (code) {
                                return (
                                    <Card
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
                    onClose={this.onDialogClose}/>
            </div>
        );
    }
});