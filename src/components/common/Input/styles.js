import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'

export default StyleSheet.create({
  root: {
    marginVertical: 5,
  },
  wrapper: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    minWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  label: {
    paddingBottom: 5,
  },
})
