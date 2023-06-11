import { combineReducers } from 'redux';
import countryReducer from './countryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  countriesState: countryReducer,
  userState:userReducer
});

export default rootReducer;
