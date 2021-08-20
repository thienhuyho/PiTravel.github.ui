import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.7030799,
            longitude: -74.0559131,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: 40.7030799,
              longitude: -74.0559131,
            }}
            title='Demo'
            description='A location to test'
          />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
})
