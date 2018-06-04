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

        Api.delete(this.props.code)
            .then(() => this.props.fetchCodes());
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
                                primaryText="Pobierz ZIP" />
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