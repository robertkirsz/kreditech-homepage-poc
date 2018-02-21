import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducers } from 'store'

const enhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(thunk))

const store = createStore(reducers, {}, enhancers)

export const getState = () => store.getState()

export default store
