/** @jsx React.DOM */
var React = require('react');

var Api = require('./Api.jsx');
var config = require('./Config.jsx');
var Code = require('./Code.jsx');
var CardPlatforms = require('./CardPlatforms.jsx');

var Card = require('material-ui').Card;
var CardTitle = require('material-ui').CardTitle;
var CardHeader = require('material-ui').CardHeader;
var CardMedia = require('material-ui').CardMedia;
var CardText = require('material-ui').CardText;
var Divider = require('material-ui').Divider;

var IconButton = require('material-ui/lib/icon-button');
var ModeEdit = require('material-ui/lib/svg-icons/editor/mode-edit');
var FileDownload = require('material-ui/lib/svg-icons/file/file-download');
var RemoveFile = require('material-ui/lib/svg-icons/content/clear');

var IconMenu = require('material-ui/lib/menus/icon-menu');
var MenuItem = require('material-ui/lib/menus/menu-item');
var MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');

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