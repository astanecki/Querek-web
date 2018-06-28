import React from 'react';

import CONFIG from '../../config/config.jsx';
import InputApplicationFile from '../inputFile/InputFile';
import {AppBar, Dialog, FlatButton, TextField} from 'material-ui';

const customContentStyle = {width: '400px', maxWidth: 'none'};

module.exports = React.createClass({

    /**
     * @type {String}
     */
    title: '',

    /**
     * @type {String}
     */
    version: '',

    /**
     * @type {String}
     */
    description: '',

    /**
     * @type {String}
     */
    date: '',

    /**
     * @type {Object}
     */
    files: {},

    /**
     * @function
     * @returns {*}
     */
    prepareNewVersion() {
        return {
            title:          this.title,
            description:    this.description,
            version:        this.version,
            date:           this.getDate(),
            platforms:      this.getSupportedPlatforms(),
            zip:            this.files.zip,
            ipa:            this.files.ipa,
            apk:            this.files.apk,
            type:           this.props.type
        };
    },

    getDate() {
        const date = new Date();

        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    },

    /**
     * @function
     */
    onSubmit() {
        this.props.createApp(
            this.prepareNewVersion(),
            {
                onUploadProgress: progressEvent => {
                    console.log('Progress: ',  (progressEvent.loaded / progressEvent.total) * 100 + ' %');
                }
            }
        );

        // TODO clear data in dialog
    },

    /**
     * @function
     * @returns {Array.<String>}
     */
    getSupportedPlatforms() {
        var supported = [];

        if (this.files.apk) {
            supported.push('android');
        }

        if (this.files.ipa) {
            supported.push('ios');
        }

        return supported;
    },

    /**
     * @function
     * @param {Event} event
     */
    onFileChange: function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        var fileExtension = event.target.className;

        if (file) {
            // Closure to capture the file information.
            reader.onload = (function (file) {
                return function(e) {
                    console.log('onFileChange', fileExtension);

                    this.files[fileExtension] = {
                        name: file.name,
                        base64: e.target.result.split("base64,")[1]
                    };

                }.bind(this);
            }.bind(this))(file);

            // Read in the image file as a data URL.
            reader.readAsDataURL(file);
        }
    },

    /**
     * @function
     * @param {Event} event
     */
    onVersionChange: function (event) {
        this.version = event.target.value;
        this.title = `${CONFIG.CLIENT_APP.NAME} ${this.version}`;
    },

    /**
     * @function
     * @param {Event} event
     */
    onDescriptionChange: function (event) {
        this.description = event.target.value;
    },

    /**
     * @function
     * @returns {XML}
     */
    render() {
        const {
            onClose,
            isOpened,
            type,
            defaultName
        } = this.props;

        var actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={onClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.onSubmit}
                />
        ];

        return (
            <Dialog
                title={type === 'release' ? 'New release version': 'New develop version'}
                actions={actions}
                modal={false}
                open={isOpened}
                onRequestClose={onClose}
                contentStyle={customContentStyle}
                >

                <TextField
                    fullWidth={true}
                    floatingLabelText="Version"
                    defaultValue={defaultName}
                    onChange={this.onVersionChange}
                    /><br/>

                <TextField
                    fullWidth={true}
                    floatingLabelText="Description"
                    multiLine={true}
                    rows={4}
                    rowsMax={7}
                    onChange={this.onDescriptionChange}
                    /><br/>

                <InputApplicationFile
                    name="ZIP"
                    class="zip"
                    data-file-type="zip"
                    changeCallback={this.onFileChange}
                    />

                <InputApplicationFile
                    name="IPA"
                    class="ipa"
                    data-file-type="ipa"
                    changeCallback={this.onFileChange}
                    />

                <InputApplicationFile
                    name="APK"
                    class="apk"
                    changeCallback={this.onFileChange}
                    />

            </Dialog>
        );
    }
});