import React from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from '../styles'

export default ({characterName, characterClass, onCharacterClick}) => {
  return (
    <View style={styles.character}>
      <TouchableHighlight onPress={onCharacterClick}>
        <View>
          <Text>{characterName}</Text>
          <Text>{characterClass}</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}
