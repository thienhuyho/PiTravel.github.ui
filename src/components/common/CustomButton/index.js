import React from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'

const CustomButton = ({ loading, onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, style]}>
      {loading && <ActivityIndicator color={textStyle?.color} />}
      {!loading && title && <Text style={textStyle}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default CustomButton
