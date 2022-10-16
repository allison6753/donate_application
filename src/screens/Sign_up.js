import { KeyboardAvoidingView, StyleSheet, TextInput, Text } from 'react-native'
import { TallFormBody } from "../containers/Body"
import { SignUpButton, BackButton } from "../components/buttons"
import React, { useState } from 'react';
import { medium_orange, light_orange, white, gray, dark_gray, globalScreen, globalInput } from '../constants/globals';
import { registerDonor, registerShelter, usernameExists, printDatabase } from '../database/Database';

const styles = StyleSheet.create({
    SignUpScreen: globalScreen(white),
    inputArea: {
        width: '90%',
        paddingTop: "3%",
    },
    input: globalInput(white, light_orange, medium_orange),
    screenTitle: {
        backgroundColor: white,
        color: medium_orange,
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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let userType = route.params.userType;

    const checkRequirementsAndRegister = () => {
        if (!username.trim()) {
            console.log("Username is empty");
            alert("Please enter a username");
        } else if (!password.trim()) {
            console.log("Password is empty");
            alert("Please enter a password");
        } else if (usernameExists(username)) {
            console.log("Username already exists");
            alert("Username already in use; please try another username");
        } else {
            userType === 'Donor' ? registerDonor(username, password) : registerShelter(username, password);
            console.log("successfully registered new user");
            printDatabase();
            navigation.navigate('UserType')
        }
       
    }

    return (
        <KeyboardAvoidingView style={styles.SignUpScreen}>
            <TallFormBody>
                <Text style={styles.screenTitle}>Create an Account</Text>
                <KeyboardAvoidingView style = {styles.inputArea} >
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor={light_orange}
                        value = {username}
                        onChangeText = {text => setUsername(text)}
                        style = {styles.input}
                    />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor={light_orange}
                        value = {password}
                        onChangeText = {text => setPassword(text)}
                        style = {styles.input}
                        secureTextEntry
                    />
                </KeyboardAvoidingView>
                <SignUpButton
                    onPress={
                        checkRequirementsAndRegister
                    }
                />
            </TallFormBody>
            <BackButton onPress={() => {navigation.navigate('UserType')}}/>
        </KeyboardAvoidingView>
    )
}