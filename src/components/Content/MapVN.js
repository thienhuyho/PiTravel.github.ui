import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../theme/colors'

const MapVN = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bản đồ</Text>
      <Image
        source={require('../../assets/image/mapVN.png')}
        style={styles.map}
      ></Image>
    </View>
  )
}

export default MapVN

const styles = StyleSheet.create({
  text: {
    color: colors.lightGreen,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  map: {
    width: '100%',
    height: 380,
    borderRadius: 10,
  },
  container: {
    padding: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})
