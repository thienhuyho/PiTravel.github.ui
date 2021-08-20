import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import family from '../../assets/image/familyAndChild.png'
import colors from '../../theme/colors'

const HotelsRoom = ({ hotelRooms }) => {
  function handleRooms() {
    return (
      <View style={styles.container}>
        {hotelRooms?.map((item, index) => {
          return (
            <View key={index} style={styles.rooms}>
              <View style={styles.description}>
                <Text>{item.description}</Text>
              </View>
              <View>
                <Image source={family} resizeMode='cover' />
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View>
      <Text>{handleRooms()}</Text>
    </View>
  )
}

export default HotelsRoom

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  description: {},
  rooms: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginLeft: 15,
    marginBottom: 15,
  },
})
