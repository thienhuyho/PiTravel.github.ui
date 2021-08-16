import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

export default StyleSheet.create({
  wrapper: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    minWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
})
