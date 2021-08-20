import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../theme/colors'

const Services = ({ services }) => {
  console.log('services1', services)

  function handleServices() {
    return (
      <View style={styles.container}>
        {services?.map((item, index) => {
          // console.log('hihi', item)
          return (
            <View key={index} style={styles.services}>
              <Image
                source={{ uri: `https://pibooking.vn/${item.url}` }}
                resizeMode='cover'
                style={styles.image}
              />
              <View style={styles.servicesContent}>
                <Text>{item.name}</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View>
      <Text>{handleServices()}</Text>
    </View>
  )
}

export default Services
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    maxWidth: 400,
  },
  services: {
    // margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    width: '44%',
    marginLeft: 15,
    marginBottom: 15,
  },
  image: {
    marginBottom: 10,
    marginTop: 10,
    width: 23,
    height: 23,
  },
  servicesContent: {},
})
