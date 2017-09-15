import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistState} from 'redux-devtools'
import DevTools from './components/DevTools'
import rootReducer from 'reducers'

export function configureStore (initialState = {}) {
  const enhancers = [applyMiddleware(thunk)]

  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(DevTools.instrument())
    enhancers.push(persistState(getDebugSessionKey()))
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  // For hot reloading of react components
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

function getDebugSessionKey () {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}
