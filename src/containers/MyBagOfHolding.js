import React, { Component } from 'react'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import CharactersContainer from './CharactersContainer'

let store = createStore(reducers, compose(
    applyMiddleware(thunk),
    global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
  ))

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <CharactersContainer />
      </Provider>
    )
  }
})
