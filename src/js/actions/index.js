import axios from 'axios';

export const FETCH = 'fetch';
export const CREATE = 'create';

export function fetch() {
    return {
        type: FETCH,
        payload: axios.get()
    };
}

export function send(app, callback) {
    const request = axios
            .post(`server-url-to-post`, app)
            .then(() => callback());

    return {
        type: CREATE,
        payload: request
    };
}

export function remove() {

}