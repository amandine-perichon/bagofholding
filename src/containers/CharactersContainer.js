import React from 'react'
import {connect} from 'react-redux'

import Characters from '../components/Characters'

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(Characters)
