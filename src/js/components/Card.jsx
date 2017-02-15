import React from 'react';

import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import RemoveFile from 'material-ui/svg-icons/content/clear';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem, IconMenu, IconButton, Card, CardTitle, CardHeader, CardMedia, CardText, Divider} from 'material-ui';

import Api from '../services/Api.jsx';
import config from '../config/Config.jsx';
import Code from './Code.jsx';
import CardPlatforms from './CardPlatforms.jsx';

module.exports = React.createClass({

    /**
     * @function
     */
    componentDidMount: function () {
        console.log('Card mount!');
    },

    /**
     * @function
     * @returns {Array.<String>}
     */
    readPlatforms: function () {
        return this.props.code.platforms;
    },

    /**
     * @function
     */
    onRemoveClicked: function () {
        console.log('Removing ', this.props.code.version);

        Api.removeApp(this.props.code);
    },

    /**
     * @function
     */
    onDownloadZipClicked: function () {
        Api.downloadFile({
            type: this.props.code.type,
            version: this.props.code.version,
            extension: 'zip'
        })
    },

    /**
     * @function
     * @returns {XML}
     */
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
                                //TODO load from lang file
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