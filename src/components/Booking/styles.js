import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  label: {
    color: colors.white,
  },
})
