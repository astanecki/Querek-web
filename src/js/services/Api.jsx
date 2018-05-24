import config from '../config/Config.jsx';
import axios from 'axios';

module.exports = {
    fetch() {
        return axios.get(`${config.NETWORK.SERVER_IP}/applications`);
    },

    save(app, options = {}) {
        return axios.post(`${config.NETWORK.SERVER_IP}/applications/${app.type}/${app.version}`, app, options);
    },

    delete(app) {
        return axios.delete(`${config.NETWORK.SERVER_IP}/applications/${app.type}/${app.version}`, app);
    }
};