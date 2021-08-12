import React, { Component } from "react";
import AppStyle from '../theme';
import {
    View,
    Text
} from 'react-native'
export default class Main extends Component {
    render() {
        return (
            <View style={AppStyle.StyleCommon.viewMain}>
                <Text style={AppStyle.StyleCommon.button1}>
                    'Button 1!'
                </Text>
                <Text style={AppStyle.StyleMain.button2}>
                    'Button 2!'
                </Text>
            </View>
        );
    }
}