import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = ({ route, }) => {
    const {name, email} = route.params;
  return (
    <View style={styles.container}>
      <Text>{ name }</Text>
      <Text>{ email }</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    },

})