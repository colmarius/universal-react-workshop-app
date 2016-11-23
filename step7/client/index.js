import { render } from 'react-dom'
import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import App from "./App.jsx"

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import { loadData } from './actions'

let store
if (typeof window.__PRELOADED_STATE__ !== 'undefined') {
  store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(thunk))
} else {
  // ...no preloaded state...dispatch the load action!
  store = createStore(reducers, applyMiddleware(thunk))
  store.dispatch(loadData())
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
)
