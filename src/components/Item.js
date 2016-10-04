import React from 'react'
import {
  View,
  Text
} from 'react-native'

export default ({itemType, itemName, itemRarity}) => {
  return (
    <View>
      <Text>
        {itemType}
      </Text>
      <Text>
        {itemName}
      </Text>
      <Text>
        {itemRarity}
      </Text>
    </View>
  )
}
