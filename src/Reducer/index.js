/**
 * @providesModule localRedux
 */

import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootSaga from '../Saga'
import { homeReducer } from "./Home";
export default () => {

  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    home: homeReducer
  })

  const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['courseArea']
  }

  const sagaMiddleware = createSagaMiddleware()
  const pReducer = persistReducer(persistConfig, rootReducer)
  // mount it on the Store
  const store = createStore(
    pReducer,
    undefined,
    applyMiddleware(sagaMiddleware)
  )
  const persistor = persistStore(store)

  // then run the saga
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}