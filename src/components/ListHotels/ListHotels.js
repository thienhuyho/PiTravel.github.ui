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
import { actionCreators, initialState, reducer } from './hotels'
import Hotel from './Hotel'

const ListHotels = () => {
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
                <Hotel item={item} id={item.id} />
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}

export default ListHotels

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 20,
    paddingRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    marginTop: 10,
    fontSize: 14,
    color: '#F8F8F8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleList: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  vn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightGreen,
  },
  chose: {
    fontSize: 16,
    color: colors.lightGreen,
  },
  scroll: {
    maxHeight: 200,
  },
})
