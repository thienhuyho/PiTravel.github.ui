import 'react-native-gesture-handler';
import React from 'react';
import AppStyle from './src/theme';
import AppNavigator from './src/navigators/AppNavigator';
// import Footer from './src/components/Footer/Footer';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
    //     Welcome to the Demo!
    //   </Text>
    //   <Text style={AppStyle.StyleMain.button2}>Button 2!</Text>
    // </View>
    <>
      <AppNavigator />
      {/* <Footer /> */}
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
export default App;