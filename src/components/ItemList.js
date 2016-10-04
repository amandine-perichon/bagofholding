import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import styles from '../styles'

import Item from './Item'

export default React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onBack: React.PropTypes.func.isRequired
  },
  render() {
    const items = this.props.items.map((elem, i) => <Item key={i} itemType={elem.itemType} itemName={elem.itemName} itemRarity={elem.itemRarity} />)
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableHighlight>
        <ScrollView style={styles.itemList}>
          {items}
        </ScrollView>
      </View>
    )
  }
})
