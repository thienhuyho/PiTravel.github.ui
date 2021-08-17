import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
const Hotel = ({ navigation, item, id }) => {
  console.log('aa', item)
  const moveToAddNewCustomer = ids => {
    console.log('id', ids)
  }
  return (
    <View style={styles.containerHotel}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PanelHotel', {
              idHotel: item.id,
            })
          }
        >
          <Image
            style={styles.image}
            source={{ uri: `https://pibooking.vn/${item.url}` }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={1}>
          <Icon name='location' size={16} color='#333' />
          {item.address}
        </Text>
        <Text>Giá chỉ từ: {item.price} VND</Text>
      </View>
    </View>
  )
}

export default Hotel
