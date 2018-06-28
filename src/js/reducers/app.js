import {
    FETCH_SUCCESS,
    CREATE_APP_SUCCESS,
    DELETE_APP_SUCCESS
} from '../actions';

import { Map, List} from 'immutable';

const init= Map({
  release: List(),
  developer: List()
});

const addApp = (state, { payload }) => {
  console.log(`addApp() ${payload}`);

  return state.merge({
    // TODO THERE IS BUG - TRY TO REMOVE JUST CREATED APP.
    // MAKE SURE HERE Immutable.List is returned as [payload.type] value
    // CREATED ISSUE: https://github.com/astanecki/Querek-web/issues/11
    [payload.type]: state
        .get(payload.type)
        .push(payload)
  });
};

const deleteApp = (state, { payload }) => {
  const { _id, type } = payload;

  console.log(`deleteApp() ${payload}`);

  return state.merge({
    [type]: state
        .get(type)
        .filter(item => item.get('_id') !== _id)
  });
};


export default (state = init, action) => {
  console.log('APP REDUCER: ', action);

  switch(action.type) {
    case FETCH_SUCCESS:
      return state.merge(action.payload);

    case CREATE_APP_SUCCESS:
      return addApp(state, action);

    case DELETE_APP_SUCCESS:
      return deleteApp(state, action);

    default:
      return state;
  }
};