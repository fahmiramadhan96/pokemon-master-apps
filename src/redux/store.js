/**
 * create global store
 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
/**
 * import saga global and reducer global
 */
import globalReducers from './globalReducers'
import globalSagas from './globalSagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  globalReducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(globalSagas)

export default store