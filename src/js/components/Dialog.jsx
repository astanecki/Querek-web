import React from 'react';

import Api from '../services/Api.jsx';
import InputApplicationFile from './InputFile';
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
     */
    onClose: function () {
        console.log('onClose dialog');

        this.props.onClose();
    },

    /**
     * @function
     * @returns {*}
     */
    prepareNewVersion: function () {
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

    getDate: function () {
        const date = new Date();

        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    },

    /**
     * @function
     */
    onSubmit() {
        const options = {
            onUploadProgress: progressEvent => {
                console.log('Progress: ',  (progressEvent.loaded / progressEvent.total) * 100 + ' %');
            }
        };

        Api.save(this.prepareNewVersion(), options)
            .then(() => this.props.onClose())
            .then(() => this.props.fetchCodes())
            .catch(response => console.log('Error response: ', response));

        // TODO clear data in dialog
    },

    /**
     * @function
     * @returns {Array.<String>}
     */
    getSupportedPlatforms: function () {
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
        this.title = 'Fitatu ' + this.version;
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
    render: function () {
        var actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.onClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.onSubmit}
                />
        ];

        return (
            <Dialog
                title={this.props.title}
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.onClose}
                contentStyle={customContentStyle}
                >

                <TextField
                    fullWidth={true}
                    floatingLabelText="Version"
                    defaultValue={this.props.defaultName}
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