import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../components/Home'
import Friends from '../components/Friends'

const RootStack = createStackNavigator({
  Home1: {
    screen: Home,
  },
  Friends: {
    screen: Friends,
  },
})

const AppNavigator = createAppContainer(RootStack)
export default AppNavigator
