import React from 'react'
import {connect} from 'react-redux'

import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
  return {
    items: state.characters[state.currentCharacter].items
  }
}

export default connect(mapStateToProps)(ItemList)
