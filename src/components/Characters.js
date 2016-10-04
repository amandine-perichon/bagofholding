import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from '../styles'

export default React.createClass({
  propTypes: {
    characters: React.PropTypes.array.isRequired
  },
  render() {
    const characters = this.props.characters.map(elem => <Text>{elem}</Text>)
    return (
      <View style={styles.container}>
        <ScrollView>
          {characters}
        </ScrollView>
      </View>
    );
  }
})
