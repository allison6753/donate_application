import { KeyboardAvoidingView, StyleSheet, Text, Dimensions, View, Button} from "react-native";
import { light_orange, medium_orange } from '../constants/globals';
import React, { useState } from 'react';


const styles = StyleSheet.create({
    homeScreen: {
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: light_orange,
        justifyContent: 'center',
        alignItems: 'center',
    },

    WelcomeText: {
        fontSize: '30px', 
        color: medium_orange
    },
})

export function Home({navigation}) {
    return (
        <KeyboardAvoidingView style={styles.homeScreen}>
            <Text style={styles.WelcomeText}> 
                {'WELCOME BACK, SOUPER!'}
            </Text>
        </KeyboardAvoidingView>
    )
}