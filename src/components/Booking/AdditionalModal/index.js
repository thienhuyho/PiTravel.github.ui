import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import colors from '../../../theme/colors'
import CustomButton from '../../common/CustomButton'

const AdditionalModal = ({ isValidated, validate }) => {
  return (
    <View style={{ color: colors.blue, justifyContent: 'center' }}>
      <CustomButton
        title={'LIÊN HỆ ĐẶT PHÒNG'}
        style={{
          width: '100%',
          backgroundColor: colors.orange,
          height: 40,
          marginTop: 10,
        }}
        textStyle={{ color: colors.white, fontWeight: 'bold' }}
        onPress={validate}
      />
    </View>
  )
}

export default AdditionalModal
