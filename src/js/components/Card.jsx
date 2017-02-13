import React from 'react';

//Material content
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import RemoveFile from 'material-ui/svg-icons/content/clear';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
//todo load in es6
var Card = require('material-ui').Card;
var CardTitle = require('material-ui').CardTitle;
var CardHeader = require('material-ui').CardHeader;
var CardMedia = require('material-ui').CardMedia;
var CardText = require('material-ui').CardText;
var Divider = require('material-ui').Divider;

//Application content
import Api from '../services/Api.jsx';
import config from '../config/Config.jsx';
import Code from './Code.jsx';
import CardPlatforms from './CardPlatforms.jsx';

module.exports = React.createClass({

    componentDidMount: function () {
        console.log('Card mount!');
    },

    readPlatforms: function () {
        return this.props.code.platforms;
    },

    onRemoveClicked: function () {
        console.log('Removing ', this.props.code.version);

        Api.removeApp(this.props.code);
    },

    onDownloadZipClicked: function () {
        Api.downloadFile({
            type: this.props.code.type,
            version: this.props.code.version,
            extension: 'zip'
        })
    },

    render: function () {
        return (
            <Card
                key={this.props.code._id}
                className='card'>

                <CardHeader
                    title={this.props.code.title}
                    subtitle={this.props.code.date}
                    avatar={config.APP.LOGO_URL}>

                    <div className='card-buttons'>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                            <MenuItem
                                primaryText="Pobierz ZIP"
                                onClick={this.onDownloadZipClicked}/>
                            <MenuItem
                                primaryText="Usuń"
                                onClick={this.onRemoveClicked}/>
                        </IconMenu>
                    </div>

                </CardHeader>

                <CardMedia
                    className='card-media'>
                    <Code
                        type={this.props.code.type}
                        version={this.props.code.version}/>
                </CardMedia>

                <CardText
                    className='card-text'>
                    {this.props.code.description}
                </CardText>

                <Divider />

                <CardPlatforms
                    platforms={this.readPlatforms()}/>
            </Card>
        );
    }
});

//In <div className='card-buttons'>
//    <IconButton className='card-tool-button' tooltip="Pobierz ZIP"> <FileDownload /> </IconButton>
//    <IconButton className='card-tool-button' tooltip="Edytuj"> <ModeEdit /> </IconButton>
//    <IconButton className='card-tool-button' tooltip="Usuń"> <RemoveFile /> </IconButton>