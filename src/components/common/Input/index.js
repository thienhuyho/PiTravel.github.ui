import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'

const Input = ({
  inputStyle,
  labelStyle,
  label,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => (
  <View style={[styles.root, style]}>
    {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    <View style={styles.wrapper}>
      {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
      <TextInput style={[styles.input, inputStyle]} {...props} />
      {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
    </View>
  </View>
)

export default Input
