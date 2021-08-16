import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  content: {
    flexDirection: 'row',
  },
})
