import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'

import styles from '../styles'

import Character from './Character'
import CharacterInput from './CharacterInput'

export default React.createClass({
  propTypes: {
    characters: React.PropTypes.array.isRequired,
    onCharacterAdd: React.PropTypes.func.isRequired
  },
  render() {
    const characters = this.props.characters.map((elem, i) => <Character key={i} characterName={elem.characterName} characterClass={elem.characterClass}/>)
    return (
      <View style={styles.container}>
      <CharacterInput onCharacterAdd={this.props.onCharacterAdd}/>
        <ScrollView>
          {characters}
        </ScrollView>
      </View>
    );
  }
})
