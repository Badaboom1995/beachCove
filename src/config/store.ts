/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { createReducer } from './rootReducer'

export function configureAppStore() {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware]

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
  })

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {})
  }

  return store
}
