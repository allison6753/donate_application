import { KeyboardAvoidingView, StyleSheet, TextInput, Text } from 'react-native'
import { TallFormBody } from "../containers/Body"
import { CreateAccountButton, BackButton } from "../components/buttons"
import React, { useState } from 'react';
import { medium_blue, light_blue, lightest_blue, gray, dark_gray, white, globalScreen, globalInput } from '../constants/globals';

const styles = StyleSheet.create({
    createAccountScreen: globalScreen(lightest_blue),
    inputArea: {
        width: '90%',
        paddingTop: "3%",
    },
    input: globalInput(white, light_blue, medium_blue),
    agreement: {
        backgroundColor: white,
        color: medium_blue,
        textAlign:"center",
        textAlignVertical: "center",
        width: "80%",
        fontSize: "12%",
    },
    screenTitle: {
        backgroundColor: white,
        color: medium_blue,
        fontWeight: 'bold',
        textAlign:"center",
        textAlignVertical: "center",
        fontSize: "25%"
    },

    disabledAccountButton: {
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: gray,
        borderColor: dark_gray,
        borderWidth: 3,
        width: "90%",
        height: "11%"
    },
    disabledButtonText: {
        color: dark_gray,
        textAlign:"center",
        textAlignVertical: "center"
    },
})
export function Sign_up({route, navigation}) {
    return (
        <KeyboardAvoidingView style={styles.createAccountScreen}>
            <TallFormBody>
                <Text style={styles.screenTitle}>Create an Account</Text>
                <Text style={styles.agreement}>By creating an account you agree to our Terms of Service and Privacy Policy</Text>
            </TallFormBody>
        </KeyboardAvoidingView>
    )
}