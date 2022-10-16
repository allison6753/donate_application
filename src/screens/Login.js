import { KeyboardAvoidingView, StyleSheet, TextInput, View, Dimensions, Image } from "react-native";
import { FormBody } from "../containers/Body";
import { Heading } from '../containers/Header'
import { SignUpButton, LoginButton } from "../components/buttons";
import React, { useState } from 'react';
import { white, light_blue, medium_blue, globalScreen, globalInput } from "../constants/globals";
import { database } from '../database/Database';
import { CurrentUserData } from '../database/CurrentUserData';


const styles = StyleSheet.create({
    loginScreen: globalScreen(white),
    inputArea: {
        width: '100%',
        backgroundColor: white
    },
    input: globalInput(white, light_blue, medium_blue)
})

export function Login({navigation}) {
    username = undefined;
    password = undefined;

    const authenticate = () => {
        if (!database.has(username)) return false;
        return database.get(username).password.equals(password);
    }

    const setCurrentUserData = () => {
        CurrentUserData.username = username;
    }
    
    const loginUser = () => {
        if (!authenticate()) {
            console.log("Incorrect password");
            alert("Email or password is incorrect; please try again");
        } else {
            setCurrentUserData();
            console.log("login successful");
            navigation.navigate('Home');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.loginScreen}>
            <Heading height="0.3"/>
            <FormBody>
                <View style = {styles.inputArea} >
                    <TextInput 
                    placeholder="Username"
                    placeholderTextColor={light_blue}
                    value = {username}
                    //onChangeText = {text => username = text}
                    style = {styles.input}
                    />
                    <TextInput 
                    placeholder="Password"
                    placeholderTextColor={light_blue}
                    value = {password}
                    //onChangeText = {text => password = text}
                    style = {styles.input}
                    secureTextEntry
                    />
                </View> 
                <LoginButton onPress={
                    loginUser
                }/>
                <SignUpButton onPress={() => {navigation.navigate('Sign_up')}}/>
            </FormBody>
        </KeyboardAvoidingView>
    )
}