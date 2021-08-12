import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import Paper from './GetApiPost/paper';
export default class Friends extends React.Component {
    render() {
        return (
            // <View style={styles.container}>
            //     <Text>Add friends here!</Text>
            //     <Icon name="home" size={24} color="red" />
            // </View>
            <Paper />

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});