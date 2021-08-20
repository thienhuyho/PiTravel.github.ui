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
              <View style={styles.image}>
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

  rooms: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    marginLeft: 15,
    marginBottom: 15,
    height: 120,
  },
  description: {
    flex: 7,
    // backgroundColor: colors.blue,
  },
  image: {
    flex: 3,
  },
})
