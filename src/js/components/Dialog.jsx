import React from 'react';
import Api from '../services/Api.jsx';

import InputApplicationFile from './InputFile';

var AppBar  = require('material-ui').AppBar;
var Dialog  = require('material-ui').Dialog;
var FlatButton  = require('material-ui').FlatButton;
var TextField  = require('material-ui').TextField;

var customContentStyle = {
    width: '400px',
    maxWidth: 'none'
};

module.exports = React.createClass({

    title: '',

    version: '',

    description: '',

    date: '',

    files: {},

    onClose: function () {
        console.log('close request');

        this.props.onClose();
    },

    prepareNewVersion: function () {
        return {
            title:          this.title,
            description:    this.description,
            version:        this.version,
            date:            '26.11.2015',
            platforms:      this.getSupportedPlatforms(),
            zip:            this.files.zip,
            ipa:            this.files.ipa,
            apk:            this.files.apk,
            type:           this.props.type
        };
    },

    onSubmit: function () {
        console.log('submit request');

        Api.sendApp(this.prepareNewVersion());

        // TODO clear data

        this.props.onClose();
    },

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

    onVersionChange: function (event) {
        this.version = event.target.value;
        this.title = 'Fitatu ' + this.version;
    },

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
                    floatingLabelText="Wersja"
                    defaultValue={this.props.defaultName}
                    onChange={this.onVersionChange}
                    /><br/>

                <TextField
                    floatingLabelText="Opis"
                    multiLine={true}
                    rows={2}
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