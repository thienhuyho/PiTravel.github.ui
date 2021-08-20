import 'react-native-gesture-handler'
import React from 'react'
import AppStyle from './src/theme'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/components/Home'
import PanelHotel from './src/components/DetailsHotel/PanelHotel'
import Map from './src/components/DetailsHotel/Map'
// import Footer from './src/components/Footer/Footer';
import { StyleSheet, Text, View } from 'react-native'
const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='PanelHotel' component={PanelHotel} />
        <Stack.Screen name='Map' component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
    //     Welcome to the Demo!
    //   </Text>
    //   <Text style={AppStyle.StyleMain.button2}>Button 2!</Text>
    // </View>
    // {/* <AppNavigator /> */}
    // {/* <Footer /> */}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
export default App
