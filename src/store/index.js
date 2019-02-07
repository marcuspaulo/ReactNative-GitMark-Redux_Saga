import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const createApropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createApropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
