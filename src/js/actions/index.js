import axios from 'axios';

import config from '../config/Config.jsx';

export const FETCH_APPS = 'fetch_apps';
export const CREATE_APPS = 'create_app';
export const DELETE_APPS = 'delete_app';

export function fetchApps() {
    console.log('fetchApps()');

    const request = axios.get(`${config.NETWORK.SERVER_IP}/applications`);

    return {
        type: FETCH_APPS,
        payload: request
    };
}

export function createApp(app, options = {}) {
    console.log('createApp()', app, options);

    const request = axios.post(`${config.NETWORK.SERVER_IP}/applications/${app.type}/${app.version}`, app, options);

    return {
        type: CREATE_APPS,
        payload: request
    };
}

export function deleteApp(app) {
    console.log('deleteApp()', app);

    const request = axios.delete(`${config.NETWORK.SERVER_IP}/applications/${app.type}/${app.version}`, app);

    return {
        type: DELETE_APPS,
        payload: request
    };
}