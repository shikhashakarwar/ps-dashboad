import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import getAllReducers from '../dataReducers/fetchReducers';

export default function configureStore(appName) {
  const reducers = getAllReducers(appName);
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    {},
    composeEnhancer(
      applyMiddleware(thunk)
    )
  );
}
