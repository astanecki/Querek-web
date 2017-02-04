var config = require('./Config.jsx');
var socket = require('socket.io-client')(config.NETWORK.SERVER_IP);

module.exports = {
    connect: function (fn) {
        socket.on('availableVersions', function (codes) {
            //to make loader visible
            setTimeout(function () {
                fn(codes);
            }, 1000);
        });
    },

    listenOnRelease: function (fn) {
        socket.on('new-release-code', function (code) {
            fn(code);
        });
    },

    listenOnDeveloper: function (fn) {
        socket.on('new-developer-code', function (code) {
            fn(code);
        });
    },

    sendApp: function (app) {
        socket.emit('new-app', app);
    },

    removeApp: function (app) {
        socket.emit('remove-app', app);
    },

    downloadFile: function (app) {
        socket.emit('download-app', app);
    }
};