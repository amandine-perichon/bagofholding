import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native'

import styles from '../styles'

export default React.createClass({
  propTypes: {
    onCharacterAdd: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      characterName: '',
      characterClass: ''
    }
  },
  clearText () {
    this.nameInput.setNativeProps({text: ''})
    this.classInput.setNativeProps({text: ''})
  },
  render () {
    return (
      <View style={styles.characterInputBox}>
        <TextInput
          ref={component => this.nameInput = component}
          style={styles.input}
          placeholder="Enter your character's name"
          onChangeText={(text) => this.setState({characterName: text})} />
        <TextInput
          ref={component => this.classInput = component}
          style={styles.input}
          placeholder="Enter your character's class"
          onChangeText={(text) => this.setState({characterClass: text})} />
          <TouchableHighlight onPress={() => {
              this.props.onCharacterAdd(this.state)
              this.setState({
                characterName: '',
                characterClass: ''
              })
              this.clearText()
            }}>
            <Text>Add</Text>
          </TouchableHighlight>
      </View>
    )
  }
})
