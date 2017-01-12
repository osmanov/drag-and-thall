import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux';
import reducer from './modules/reducer';

const logger=createLogger();

export default function configureStore() {
  return applyMiddleware(thunk, logger)(createStore)(reducer);
}