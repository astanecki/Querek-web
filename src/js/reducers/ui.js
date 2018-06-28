import { Map } from 'immutable';
import {
    NEW_CARD_CLICKED,
    CLOSE_DIALOG,
    TAB_CHANGED,

    FETCH_SUCCESS,
    FETCH_ERROR,
    FETCH_APPS,

    CREATE_APP,
    CREATE_APP_SUCCESS,
    CREATE_APP_ERROR,

    DELETE_APP,
    DELETE_APP_SUCCESS,
    DELETE_APP_ERROR
} from '../actions';

const init = Map({
    isDialogOpened: false,
    loader: false,
    activeTab: 'release'
});

export default function (state = init, action) {
    console.log('UI REDUCER: ', action);

    switch(action.type) {

        case TAB_CHANGED:
            return state.merge({ activeTab: action.payload });

        case NEW_CARD_CLICKED:
            return state.merge({ isDialogOpened: true });

        case CLOSE_DIALOG:
            return state.merge({ isDialogOpened: false });

        case CREATE_APP_SUCCESS:
            return state.merge({
                loader: false,
                isDialogOpened: false
            });

        case FETCH_APPS:
        case CREATE_APP:
        case DELETE_APP:
            return state.merge({ loader: true });

        case FETCH_SUCCESS:
        case FETCH_ERROR:
        case CREATE_APP_ERROR:
        case DELETE_APP_SUCCESS:
        case DELETE_APP_ERROR:
            return state.merge({ loader: false });

        default:
            return state;
    }
}