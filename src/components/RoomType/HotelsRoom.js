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
                <Text style={styles.nameRooms}>{item.description}</Text>
                <Text>1 Giường đơn</Text>
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

    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    width: 365,
    marginLeft: 15,
    marginBottom: 15,
    height: 120,
  },
  description: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 7,
    // backgroundColor: colors.blue,
  },
  image: {
    flex: 3,
    backgroundColor: colors.lightGrey,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameRooms: {
    fontWeight: 'bold',
    color: colors.darkGrey,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
})
