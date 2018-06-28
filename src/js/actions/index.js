import axios from 'axios';
import config from '../config/config.jsx';

export const FETCH_APPS = 'fetch_apps';
export const FETCH_SUCCESS = 'fetch_success';
export const FETCH_ERROR = 'fetch_error';

export const CREATE_APP = 'create_app';
export const CREATE_APP_SUCCESS = 'create_app_success';
export const CREATE_APP_ERROR = 'create_app_error';

export const DELETE_APP = 'delete_app';
export const DELETE_APP_SUCCESS = 'delete_app_success';
export const DELETE_APP_ERROR = 'delete_app_error';

export const NEW_CARD_CLICKED = 'new_card_clicked';
export const CLOSE_DIALOG = 'close_dialog';
export const TAB_CHANGED = 'tab_changed';

export function fetchApps() {
    console.log('fetchApps()');

    return dispatch => {
        dispatch({
            type: FETCH_APPS
        });

        return axios
            .get(`${config.NETWORK.SERVER_IP}/applications`)
            .then(({ data }) => dispatch({
                type: FETCH_SUCCESS,
                payload: data
            }))
            .catch(error => dispatch({
                type: FETCH_ERROR,
                error
            }));
    };
}

export function createApp(app, options = {}) {
    // This is because there is no API response payload with just created app on POST success
    // Will be removed after implementing on the server side
    // CREATED ISSUE: https://github.com/astanecki/Querek-server/issues/10
    const mockedApiResponse = Object.assign({}, app, { _id: "" + parseInt(10 * Math.random())});

    console.log('createApp()', app);

    return dispatch => {
        dispatch({
            type: CREATE_APP
        });

        return axios
            .post(`${config.NETWORK.SERVER_IP}/applications/${app.type}/${app.version}`, app, options)
            .then(() => dispatch({
                type: CREATE_APP_SUCCESS,
                payload: mockedApiResponse
            }))
            .catch(error => dispatch({
                type: CREATE_APP_ERROR,
                error
            }));
    }
}

export function deleteApp(app) {
    console.log('deleteApp()', app);

    return dispatch => {
        dispatch({
            type: DELETE_APP
        });

        return axios
            .delete(`${config.NETWORK.SERVER_IP}/applications/${app.type}/${app.version}`, app)
            .then(() => dispatch({
                type: DELETE_APP_SUCCESS,
                payload: app
            }))
            .catch(error => dispatch({
                type: DELETE_APP_ERROR,
                payload: app,
                error
            }));
    };
}

export function clickEmptyCard() {
    return { type: NEW_CARD_CLICKED };
}

export function closeDialog() {
    return { type: CLOSE_DIALOG };
}

export function changeTab(activeTab) {
    return {
        type: TAB_CHANGED,
        payload: activeTab
    }
}