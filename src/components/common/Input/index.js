import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'

const Input = ({ leftIcon, rightIcon, ...props }) => (
  <View style={styles.wrapper}>
    {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
    <TextInput style={styles.input} {...props} />
    {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
  </View>
)

export default Input
