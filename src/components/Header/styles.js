import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: 250,
    width: '100%',
  },
  background: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  bannerSection: {
    backgroundColor: 'rgba(255, 255, 255, .6)',
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchSection: {
    flex: 2,
    width: '100%',
    height: '60%',
    paddingHorizontal: 20,
    paddingTop: 20,
    position: 'relative',
  },
  searchContainer: {
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 2,
  },
  logoImage: {},
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    height: '100%',
  },
  navItem: {
    width: 110,
    height: 35,
    marginLeft: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  navImage: {
    width: '100%',
    height: '100%',
  },
  loginText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  chevron: {
    position: 'absolute',
    left: '50%',
    bottom: 10,
  },
})
