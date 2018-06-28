import React from 'react';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem, IconMenu, IconButton, Card, CardTitle, CardHeader, CardMedia, CardText, Divider} from 'material-ui';

import config from '../../config/config.jsx';
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

        this.props.deleteApp(this.props.code);
    },

    /**
     * @function
     * @returns {XML}
     */
    render() {
        const { code } = this.props;

        return (
            <Card
                key={code._id}
                className='card'>

                <CardHeader
                    title={code.title}
                    subtitle={code.date}
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
                        type={code.type}
                        version={code.version}/>
                </CardMedia>

                <CardText
                    className='card-text'>
                    {code.description}
                </CardText>

                <Divider />

                <CardPlatforms
                    platforms={this.readPlatforms()}/>
            </Card>
        );
    }
});