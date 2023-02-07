import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import Config from '../config/Config';

export const reduxStore = () => {
  const loggerMiddleware = createLogger();
  if(Config.ENVIRONMENT !== 'production'){
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));
  }
  return createStore(rootReducer, applyMiddleware(thunk));
}
