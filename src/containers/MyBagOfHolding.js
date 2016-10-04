import React, { Component } from 'react'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import reducers from '../reducers'
import CharactersContainer from './CharactersContainer'

let store = createStore(reducers)

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <CharactersContainer />
      </Provider>
    )
  }
})
