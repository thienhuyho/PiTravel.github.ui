import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function Map({ route }) {
  const { address, name, lat, long } = route.params

  return (
    <View style={styles.body}>
      {/* <Text style={styles.text}>{name}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: +lat,
          longitude: +long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: +lat,
            longitude: +long,
          }}
          title={name}
          description={address}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
