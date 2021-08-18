import React from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import styles from './styles'

const CustomModal = ({
  children,
  modalVisible,
  setModalVisible,
  style,
  closeOnClickOutSide,
}) => (
  <Modal visible={modalVisible} animationType='fade' transparent>
    <View style={{ flex: 1, position: 'relative' }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (closeOnClickOutSide) {
            setModalVisible(false)
          }
        }}
        style={styles.root}
      >
        <View style={[styles.container, style]}>{children}</View>
      </TouchableOpacity>
      <BlurView
        style={styles.absolute}
        blurType='dark'
        blurAmount={2}
        reducedTransparencyFallbackColor='white'
      />
    </View>
  </Modal>
)

export default CustomModal
