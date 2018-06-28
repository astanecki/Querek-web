import React from 'react';
import CONFIG from '../../config/config.jsx';
import CardPlatforms from '../card/CardPlatforms.jsx';
import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

module.exports = React.createClass({

    /**
     * @function
     * @returns {Array.<Object>}
     */
    readPlatforms() {
        return this.props.code.platforms;
    },

    /**
     * @function
     * @returns {XML}
     */
    render() {
        return (
            <Card
                className='card card__empty'>

                <CardHeader
                    title={CONFIG.CLIENT_APP.NAME}
                    subtitle={"Dziś"}
                    avatar={CONFIG.APP.LOGO_URL}/>

                <CardMedia
                    className='card-media'>

                    <div
                        className="card-media__button-wrapper">

                        <FlatButton
                            className="card-media__button"
                            onClick={this.props.onAddClick}
                            icon={<ContentAdd className="content-add"/>}
                        />
                    </div>
                </CardMedia>

                <CardText
                    className='card-text'/>

                <Divider />

                <CardPlatforms
                    platforms={[]}/>
            </Card>
        );
    }
});