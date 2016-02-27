import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import schedule from './modules/schedule';

export default combineReducers({
  schedule,
  router
});
