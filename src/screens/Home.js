import { KeyboardAvoidingView, StyleSheet, Text, Dimensions, View, Button} from "react-native";
import React, { useState } from 'react';


const styles = StyleSheet.create({
    homeScreen: {
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    deliveryText: {
        fontSize: '30px', 
        textDecorationLine: "underline",
    },

    buttonStyleContainer: {
        flexDirection: 'row', 
        paddingBottom: "15", 
        paddingTop: "15"
    },

    countDownButton: {
        backgroundColor: "#BEBEBE"
    }
})

export function Home({navigation}) {
    return (
        <KeyboardAvoidingView style={styles.homeScreen}>
            <Text style={styles.deliveryText}> 
                {'Home Page'}
            </Text>
        </KeyboardAvoidingView>
    )
}