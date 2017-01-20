/** @jsx React.DOM */
var React = require('react');

var config = require('./Config.jsx');
var Code = require('./Code.jsx');
var CardPlatforms = require('./CardPlatforms.jsx');

var Card = require('material-ui').Card;
var CardTitle = require('material-ui').CardTitle;
var CardHeader = require('material-ui').CardHeader;
var CardMedia = require('material-ui').CardMedia;
var CardText = require('material-ui').CardText;
var Divider = require('material-ui').Divider;
var FlatButton  = require('material-ui').FlatButton;

var ContentAdd = require('material-ui/lib/svg-icons/content/add');

module.exports = React.createClass({

    componentDidMount: function () {
        console.log('Empty develope card mount!');
    },

    readPlatforms: function () {
        return this.props.code.platforms;
    },

    render: function () {
        return (
            <Card
                className='card card__empty'>
                <CardHeader
                    title={"Fitatu"}
                    subtitle={"Dziś"}
                    avatar={config.APP.LOGO_URL}/>

                <FlatButton
                    onClick={this.props.onAddClick}>

                    <CardMedia
                        className='card-media'>

                        <ContentAdd
                            className="content-add"/>

                    </CardMedia>

                    <CardText
                        className='card-text'>
                    </CardText>

                    <Divider />
                </FlatButton>

                <CardPlatforms
                    platforms={[]}/>
            </Card>
        );
    }
});