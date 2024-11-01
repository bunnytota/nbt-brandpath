import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import rootsaga from '../saga/Mysaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootsaga)
export default store