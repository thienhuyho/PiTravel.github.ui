import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import Footer from './Footer/Footer';
import MapVN from './Content/MapVN';
import PostContent from './Content/PostContent';
import ListHotels from './ListHotels/ListHotels';

export default class Home extends React.Component {
    render() {
        return (
            <ScrollView>
                <MapVN />
                <PostContent />
                <ListHotels />
                <View style={styles.container}>
                    {/* <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    /> */}
                    <Footer />
                </View>
            </ScrollView>

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