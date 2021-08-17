import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Header'
import styles from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

const PanelHotel = ({ route, navigation }) => {
  const { idHotel } = route.params
  const [data, setData] = React.useState([])
  console.log('huy', idHotel)
  React.useEffect(() => {
    async function fetchHotel() {
      const response = await fetch(`https://pibooking.vn/api/hotels/${idHotel}`)
      const hotel = await response.json()
      console.log('ww', hotel)
      setData(hotel)
    }
    fetchHotel()
  }, [])

  const format = () => {
    var number = data.price
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(number)
  }

  const generateStar = () => {
    let arrStar = []
    for (let i = 0; i < data.evaluation; i++)
      arrStar.push(<Icon name='star' color='yellow' size={20}></Icon>)
    return arrStar
  }
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.tag}>Khách sạn </Text>
      <Text style={styles.name}>
        {data.name} {generateStar()}
      </Text>
      <Text style={styles.address}>
        <Icon name='md-location-sharp' color='grey' size={18}></Icon>
        {data.address}
      </Text>
      <View style={styles.flexPrice}>
        <Text style={styles.center}>
          Cách trung tâm {Math.floor(data.distance) || 0} km
        </Text>
        <Text style={styles.price}>Giá Chỉ từ: {format()}</Text>
      </View>
    </View>
  )
}

export default PanelHotel
