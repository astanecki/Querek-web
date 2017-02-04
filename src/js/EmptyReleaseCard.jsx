import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import config from './Config.jsx';
import Code from './Code.jsx';
import CardPlatforms from './CardPlatforms.jsx';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

module.exports = React.createClass({

    /**
     * @function
     */
    componentDidMount: function () {
        console.log('Empty release card mount!');
    },

    /**
     * @function
     * @returns {Array.<Object>}
     */
    readPlatforms: function () {
        return this.props.code.platforms;
    },

    /**
     * @function
     * @returns {XML}
     */
    render: function () {
        return (
            <Card
                className='card card__empty'>

                <CardHeader
                    title={"Fitatu"}
                    subtitle={"Dziś"}
                    avatar={config.APP.LOGO_URL}/>

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