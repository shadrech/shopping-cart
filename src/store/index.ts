import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import { reducer, AppState } from './reducers';
import { applyMiddleware, createStore } from 'redux';

export { AppState };

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;
