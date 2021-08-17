import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import colors from '../../theme/colors'
import styles from './styles'

import { actionCreators, initialState, reducer } from './hotels'
import Hotel from './Hotel'

const ListHotels = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    async function fetchPosts() {
      dispatch(actionCreators.loading())
      try {
        const response = await fetch('https://pibooking.vn/api/hotels')
        const hotels = await response.json()
        setTimeout(() => {
          dispatch(actionCreators.success(hotels))
        }, 1000)
      } catch (error) {
        dispatch(actionCreators.failure())
      }
    }
    fetchPosts()
  }, [])

  const { loading, error, hotels } = state
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} color={'red'} />
      </View>
    )
  }
  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load hotels!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleList}>
        <Text style={styles.vn}>Việt Nam</Text>
        <Text style={styles.chose}>Lựa chọn hàng đầu của chúng tôi</Text>
        <Text color={colors.darkGrey}>Giá trung bình: 1.214.234 VND</Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView nestedScrollEnabled>
          {hotels.hotels.map(item => {
            return (
              <View key={item.id}>
                <Hotel navigation={navigation} item={item} id={item.id} />
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}
export default ListHotels
