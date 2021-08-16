import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Hotel = ({ item, id }) => {
  console.log('cc', item.url, id)
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.image}
          source={{ uri: `https://pibooking.vn/${item.url}` }}
        />
      </View>
      <View style={styles.right}>
        <Text>{id}</Text>
        <Text>{item.name}</Text>
      </View>
    </View>
  )
}

export default Hotel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    height: 60,
    width: 80,
    backgroundColor: 'red',
  },
  left: {
    margin: 5,
  },
  right: {
    margin: 5,
  },
})
