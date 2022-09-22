import { AnyAction, combineReducers } from 'redux';

import TestReducer from '@store/modules/Test/index.store';
import ConfigurationsReducer from '@store/modules/Configurations/index.store';
import AuthReducer from './Auth/index.store';

const combinedReducers = combineReducers({
  auth: AuthReducer,
  test: TestReducer,
  configurations: ConfigurationsReducer,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducers>,
  action: AnyAction,
): ReturnType<typeof combinedReducers> => {
  if (action.type === 'root/resetState') {
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

export default rootReducer;
