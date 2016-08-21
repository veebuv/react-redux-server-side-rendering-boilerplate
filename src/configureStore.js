import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const middleware = [thunk];

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      /*eslint-disable*/
      store.replaceReducer(require('./reducers/index').default);
      /*eslint-enable*/
    });
  }

  return store;
}
