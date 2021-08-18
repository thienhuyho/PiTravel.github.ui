import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from 'react-native-check-box'
import styles from './styles'
import colors from '../../theme/colors'
import CustomModal from '../common/CustomModal'
import CustomButton from '../common/CustomButton'
import Input from '../common/Input'

const Booking = ({}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isGoForBusiness, setIsGoForBusiness] = useState(false)
  return (
    <View>
      <CustomButton
        title={'LIÊN HỆ ĐẶT PHÒNG'}
        style={{
          marginHorizontal: 20,
          width: '90%',
          marginVertical: 20,
          backgroundColor: colors.orange,
          height: 40,
        }}
        textStyle={{ color: colors.white, fontWeight: 'bold' }}
        onPress={() => setModalVisible(true)}
      />
      <CustomModal
        closeOnClickOutSide={false}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        style={{
          borderRadius: 15,
          padding: 20,
          backgroundColor: colors.lightGreen,
        }}
      >
        <Text style={styles.title}>Thông Tin Khách Hàng</Text>
        <Input
          editable={false}
          label={'Tên chỗ nghỉ/Điểm đến:'}
          labelStyle={styles.label}
          inputStyle={{ padding: 10 }}
          placeholder={'Lorem ispum Hotel'}
        />
        <Input
          label={'Tên khách hàng:'}
          labelStyle={styles.label}
          inputStyle={{ padding: 10 }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Input
            keyboardType='numeric'
            label={'Số điện thoại:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '47%' }}
          />
          <Input
            label={'Địa chỉ email:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '47%' }}
            rightIcon={
              <Fontisto name={'email'} size={25} color={colors.lightGrey} />
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Input
            label={'Ngày nhận phòng:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '47%' }}
            rightIcon={
              <AntDesign name={'calendar'} size={25} color={colors.lightGrey} />
            }
          />
          <Input
            label={'Ngày trả phòng:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '47%' }}
            rightIcon={
              <AntDesign name={'calendar'} size={25} color={colors.lightGrey} />
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Input
            keyboardType='numeric'
            label={'Người lớn:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '30%' }}
          />
          <Input
            keyboardType='numeric'
            label={'Trẻ em:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '30%' }}
          />
          <Input
            keyboardType='numeric'
            label={'Phòng:'}
            labelStyle={styles.label}
            inputStyle={{ padding: 10 }}
            style={{ width: '30%' }}
          />
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <CheckBox
            checkBoxColor={colors.white}
            onClick={() => {
              setIsGoForBusiness(prev => !prev)
            }}
            isChecked={isGoForBusiness}
          />
          <Text style={[styles.label, { paddingLeft: 10 }]}>
            Tôi đi công tác
          </Text>
        </View>
        <CustomButton
          title={'LIÊN HỆ ĐẶT PHÒNG'}
          style={{
            marginTop: 20,
            backgroundColor: colors.orange,
            height: 40,
          }}
          textStyle={{ color: colors.white, fontWeight: 'bold' }}
          onPress={() => setModalVisible(false)}
        />
      </CustomModal>
    </View>
  )
}

export default Booking
