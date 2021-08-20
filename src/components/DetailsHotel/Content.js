import React from 'react'

import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html'
import colors from '../../theme/colors'

const Content = ({ posts }) => {
  console.log('data', posts)
  const html = `${posts.content}`
  const { width } = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{posts.name}</Text>
      <>
        <RenderHTML contentWidth={width} source={{ html }} />
      </>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lightGreen,
  },
})
