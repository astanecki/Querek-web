import { FETCH_APPS } from '../actions';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_APPS:
      return {
        payload: action.payload,
        action: FETCH_APPS
      };
    default:
      return state;
  }
}
