import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eafc",
    paddingHorizontal: 15,
    paddingVertical: 15,
  }
});
