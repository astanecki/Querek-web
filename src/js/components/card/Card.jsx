import React from 'react';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem, IconMenu, IconButton, Card, CardTitle, CardHeader, CardMedia, CardText, Divider} from 'material-ui';

import config from '../../config/Config.jsx';
import Code from '../code/Code.jsx';
import CardPlatforms from './CardPlatforms.jsx';

module.exports = React.createClass({
    /**
     * @function
     * @returns {Array.<String>}
     */
    readPlatforms() {
        return this.props.code.platforms;
    },

    /**
     * @function
     */
    onRemoveClicked() {
        console.log('Removing ', this.props.code.version);

        this.props.deleteApp(this.props.code)
            .then(() => this.props.fetchApps());
    },

    /**
     * @function
     * @returns {XML}
     */
    render() {
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