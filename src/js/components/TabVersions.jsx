import React from 'react';
import Card from './Card.jsx'
import Dialog from './Dialog.jsx';
import EmptyReleaseCard from './EmptyReleaseCard.jsx';
import EmptyDeveloperCard from './EmptyDeveloperCard.jsx';
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
            dialogTitle: 'New release version',
            defaultName: ''
        });
    },

    /**
     * @function
     */
    addNewDeveloperVersion: function () {
        this.setState({
            isDialogOpened: !this.state.isDialogOpened,
            dialogTitle: 'New develop version',
            defaultName: ''
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
                        style={style}
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
                        style={style}
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