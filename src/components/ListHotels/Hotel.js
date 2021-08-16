import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Hotel = ({ item, id }) => {
  const moveToAddNewCustomer = ids => {
    console.log('id', ids)
  }
  console.log('cc', item.url, id)
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => moveToAddNewCustomer(id)}>
          <Image
            style={styles.image}
            source={{ uri: `https://pibooking.vn/${item.url}` }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Text>{item.name}</Text>
        <Text numberOfLines={1}>{item.address}</Text>
        <Text>Giá chỉ từ: {item.price} VND</Text>
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
    marginRight: 5,
    width: 300,
  },
})
