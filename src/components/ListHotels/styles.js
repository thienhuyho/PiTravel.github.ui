import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
  // List Hotels
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
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
    maxHeight: 300,
  },
  // Hotels
  containerHotel: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    height: 70,
    width: 80,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  left: {
    marginRight: 5,
  },
  right: {
    marginRight: 5,
    width: 300,
  },
  name: {
    fontWeight: 'bold',
    color: colors.lightGreen,
  },
})
