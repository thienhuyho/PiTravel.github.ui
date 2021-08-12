import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Footer from './Footer/Footer';

export default class Home extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>We have no friends!</Text>
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
                    <Button
                        title="Add some friends"
                        onPress={() =>
                            this.props.navigation.navigate('Friends')
                        }
                    />
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