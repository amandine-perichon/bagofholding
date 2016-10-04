import React from 'react'
import {connect} from 'react-redux'

import Characters from '../components/Characters'
import { addCharacter } from '../actions'

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCharacterAdd: function (character) {
      dispatch(addCharacter(character))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
