import React, { Component } from 'react'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import { Navigator } from 'react-native'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import CharactersContainer from './CharactersContainer'
import  ItemListContainer from './ItemListContainer'

let store = createStore(reducers, compose(
    applyMiddleware(thunk),
    global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
  ))

export default React.createClass({
  navigatorRenderScene (route, navigator) {
      switch (route.id) {
        case 'characters':
          return (
            <CharactersContainer
              onCharacterClick={ () => {
                navigator.push({
                  id: 'items'})
              }}
              />
          )
        case 'items':
          return <ItemListContainer onBack={() => {
              navigator.pop()
            }}/>
        default:
          return <CharactersContainer />
      }
  },
  render() {
    return (
      <Provider store={store}>
      <Navigator
        initialRoute={{id: 'characters'}}
        renderScene={this.navigatorRenderScene} />
      </Provider>
    )
  }
})
