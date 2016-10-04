import React from 'react'
import {
  Text,
  View
} from 'react-native'

export default ({characterName, characterClass}) => {
  return (
    <View>
      <Text>{characterName}</Text>
      <Text>{characterClass}</Text>
    </View>
  )
}
