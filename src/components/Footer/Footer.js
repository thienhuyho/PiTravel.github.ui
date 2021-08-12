import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.headerFooterStyle}>
            <View style={styles.rowFlex}>
                <Image source={require('../../assets/image/Group34.png')} style={styles.abc} />
                <Image source={require('../../assets/image/Group35.png')} style={styles.abc} />
                <Image source={require('../../assets/image/Group36.png')} style={styles.abc} />
            </View>
            <View style={styles.rowFlex}>
                <Image source={require('../../assets/image/Group37.png')} style={styles.abc} />
                <Image source={require('../../assets/image/Group38.png')} style={styles.abc} />
                <Image source={require('../../assets/image/Group40.png')} style={styles.abc} />
            </View>
        </View>
    );
}

export default Footer

const styles = StyleSheet.create({
    headerFooterStyle: {
        width: '100%',
        height: 130,
        backgroundColor: '#00a99d',
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
    abc: {
        width: 120,
        resizeMode: 'contain',

        marginLeft: 10



    },
    rowFlex: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',

        // flexDirection: "vertical",
    }
})
