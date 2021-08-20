import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../Header'
import styles from './styles'
import Footer from '../Footer/Footer'
import ImageHotel from './ImageHotel'
import 'intl'
import 'intl/locale-data/jsonp/en'
import CustomButton from '../common/CustomButton'
import colors from '../../theme/colors'
import CustomModal from '../common/CustomModal'
import Booking from '../Booking'
import Content from './Content'
import Services from '../Services/Services'
import HotelsRoom from '../RoomType/HotelsRoom'

const PanelHotel = ({ route, navigation }) => {
  const { idHotel } = route.params
  const [data, setData] = React.useState([])
  const [image, setImage] = React.useState([])
  const [posts, setPosts] = React.useState([])
  const [services, setServices] = React.useState([])
  const [room, setRoom] = React.useState([])
  React.useEffect(() => {
    async function fetchHotel() {
      const response = await fetch(`https://pibooking.vn/api/hotels/${idHotel}`)
      const hotel = await response.json()
      setData(hotel)
      setImage(hotel.images)
      setPosts(hotel.posts)
      setServices(hotel.services)
      setRoom(hotel.hotel_rooms)
    }
    fetchHotel()
  }, [])

  const format = () => {
    const number = data.price
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(number)
  }

  const generateStar = () => {
    const arrStar = []
    for (let i = 0; i < data.evaluation; i++)
      arrStar.push(<Icon key={i} name='star' color='yellow' size={20} />)
    return arrStar
  }
  console.log('data', data)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Text style={styles.tag}>Khách sạn </Text>
        <Text style={styles.name}>
          {data.name} {generateStar()}
        </Text>
        <Text style={styles.address}>
          <Icon name='md-location-sharp' color='grey' size={18} />
          {data.address}
        </Text>
        <View style={styles.flexPrice}>
          <Text style={styles.center}>
            Cách trung tâm {Math.floor(data.distance) || 0} km
          </Text>
          <Text style={styles.price}>Giá Chỉ từ: {format()}</Text>
        </View>
        <ImageHotel images={image} />
        <Booking />
        <Content posts={posts} />
        <Services services={services} />
        <HotelsRoom hotelRooms={room} />
        <Button title='Map' onPress={() => navigation.navigate('Map')} />

        <Footer />
      </View>
    </ScrollView>
  )
}

export default PanelHotel
