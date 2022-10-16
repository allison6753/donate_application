import { KeyboardAvoidingView, StyleSheet, TextInput, View, Dimensions, Image } from "react-native";
import { FormBody } from "../containers/Body";
import { Heading } from '../containers/Header'
import { SignUpButton, LoginButton } from "../components/buttons";
import React, { useState } from 'react';
import { white, light_orange, medium_orange, globalScreen, globalInput } from "../constants/globals";
import { usernameExists, correctPassword, printDatabase } from '../database/Database';
import { CurrentUserData } from '../database/CurrentUserData';


const styles = StyleSheet.create({
    loginScreen: globalScreen(white),
    inputArea: {
        width: '100%',
        backgroundColor: white
    },
    input: globalInput(white, light_orange, medium_orange)
})

export function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authenticate = () => {
        printDatabase();

        if (!username.trim()) {
            console.log("Username is empty");
            alert("Please enter a username");
            return false;
        }

        if (!password.trim()) {
            console.log("Password is empty");
            alert("Please enter a password");
            return false;
        }

        if (!usernameExists(username)) {
            console.log("Invalid username");
            alert("Username does not exist");
            return false;
        }

        if (!correctPassword(username, password)) {
            console.log("Incorrect password");
            alert("Password is incorrect; please try again");
            return false;
        }

        return true;
    }

    const setCurrentUserData = () => {
        CurrentUserData.username = username;
    }
    
    const loginUser = () => {
        if (authenticate()) {
            setCurrentUserData();
            console.log("login successful");
            navigation.navigate('Shelter_home');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.loginScreen}>
            <Heading height="0.3"/>
            <FormBody>
                <View style = {styles.inputArea} >
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
                </View> 
                <LoginButton onPress={
                    loginUser
                }/>
                <SignUpButton onPress={() => {navigation.navigate('UserType')}}/>
            </FormBody>
        </KeyboardAvoidingView>
    )
}