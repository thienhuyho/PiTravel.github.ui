import React, { useState } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styles'
import colors from '../../theme/colors'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'

const headerBackground = require('../../assets/image/bgHeader.png')
const logoImage = require('../../assets/image/Logo-Pi.png')
const CHPlayImage = require('../../assets/image/CHplay.png')
const appStoreImage = require('../../assets/image/appstore.png')

const Header = ({}) => {
  const [isFulled, setIsFulled] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <View style={styles.wrapper}>
      <Image style={styles.background} source={headerBackground} />
      <View style={styles.container}>
        <View style={styles.bannerSection}>
          <Image style={styles.logoImage} source={logoImage} />
          <View style={styles.navItems}>
            <View style={styles.navItem}>
              <Image style={styles.navImage} source={CHPlayImage} />
            </View>
            <View style={styles.navItem}>
              <Image style={styles.navImage} source={appStoreImage} />
            </View>
          </View>
        </View>
        <View style={styles.searchSection}>
          <View
            style={[styles.searchContainer, { height: isFulled ? 290 : 100 }]}
          >
            <Input
              leftIcon={
                <AntDesign name='search1' size={30} color={colors.darkGrey} />
              }
              placeholder='Bạn muốn đến đâu ?'
            />
            {isFulled && (
              <>
                <Input
                  leftIcon={
                    <AntDesign
                      name='calendar'
                      size={30}
                      color={colors.darkGrey}
                    />
                  }
                  placeholder='Nhận phòng - trả phòng'
                />
                <Input
                  leftIcon={
                    <SimpleLineIcons
                      name='people'
                      size={30}
                      color={colors.darkGrey}
                    />
                  }
                  rightIcon={
                    <EvilIcons
                      name='chevron-down'
                      size={30}
                      color={colors.darkGrey}
                    />
                  }
                  placeholder='2 người lớn. 0 trẻ em. 1 phòng'
                />
                <CustomButton
                  title='TÌM'
                  style={{ backgroundColor: colors.orange }}
                  textStyle={{ color: colors.white, fontWeight: 'bold' }}
                  loading={loading}
                  onPress={() => setLoading(prev => !prev)}
                  // disabled
                  // leftIcon={
                  //   <AntDesign name='search1' size={30} color={colors.grey} />
                  // }
                />
              </>
            )}
            <Pressable
              style={styles.chevron}
              onPress={() => setIsFulled(prev => !prev)}
            >
              <EvilIcons
                name={`chevron-${isFulled ? 'up' : 'down'}`}
                color={colors.white}
                size={30}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Header
