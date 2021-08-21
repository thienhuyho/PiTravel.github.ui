import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Footer from './Footer/Footer'
import MapVN from './Content/MapVN'
import PostContent from './Content/PostContent'
import ListHotels from './ListHotels/ListHotels'
import Header from './Header'

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Header showSearch />
      <MapVN />
      <PostContent />
      <ListHotels navigation={navigation} />
      <View style={styles.container}>
        {/* <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    /> */}
        <Footer />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
