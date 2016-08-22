import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data: (state = { data: '' }) => state,
});

export default rootReducer;
