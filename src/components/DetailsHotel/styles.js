import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightWhite,
  },
  tag: {
    backgroundColor: colors.lightGrey,
    color: colors.lightWhite,
    textAlign: 'center',
    padding: 6,
    marginLeft: 15,
    marginTop: 20,
    borderRadius: 3,
    width: 100,
  },
  name: {
    color: colors.lightGreen,
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 15,
    marginTop: 10,
  },
  address: {
    color: colors.darkGrey,
    marginLeft: 15,
    marginTop: 5,
  },
  center: {
    fontStyle: 'italic',
    color: colors.darkGrey,
    marginLeft: 15,
    marginTop: 5,
  },
  price: {
    fontStyle: 'italic',
    color: colors.darkGrey,
    marginRight: 15,
    marginTop: 5,
  },
  flexPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleMap: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue,
    marginLeft: 15,
    marginBottom: 10,
    textDecorationLine: 'underline',
    // cursor: 'pointer',
  },
})
