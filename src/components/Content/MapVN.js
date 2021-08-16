import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

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
    color: '#00a99d',
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 380,
  },
  container: {
    padding: 5,
    backgroundColor: '#fff',
  },
})
