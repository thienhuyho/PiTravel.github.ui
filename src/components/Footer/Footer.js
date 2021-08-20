import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../theme/colors'

const Footer = () => {
  return (
    <View style={styles.headerFooterStyle}>
      <View style={[styles.rowFlex, { marginBottom: -10 }]}>
        <Image
          source={require('../../assets/image/Group34.png')}
          style={styles.abc}
        />
        <Image
          source={require('../../assets/image/Group35.png')}
          style={styles.abc}
        />
        <Image
          source={require('../../assets/image/Group36.png')}
          style={styles.abc}
        />
      </View>
      <View style={[styles.rowFlex, { marginTop: -15 }]}>
        <Image
          source={require('../../assets/image/Group37.png')}
          style={styles.abc}
        />
        <Image
          source={require('../../assets/image/Group38.png')}
          style={styles.abc}
        />
        <Image
          source={require('../../assets/image/Group40.png')}
          style={styles.abc}
        />
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  headerFooterStyle: {
    width: '100%',
    backgroundColor: '#00a99d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  abc: {
    width: 120,
    resizeMode: 'contain',
    // marginLeft: 10,
  },
  rowFlex: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    // flexDirection: "vertical",
  },
  father: {},
})
