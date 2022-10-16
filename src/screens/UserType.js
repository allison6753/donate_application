import { KeyboardAvoidingView, StyleSheet, View, Text, Dimensions } from 'react-native'
import { TallFormBody } from "../containers/Body"
import React from 'react';
import { BackButton, UserTypeButton } from '../components/buttons'
import { medium_blue, lightest_blue, white } from '../constants/globals'

const styles = StyleSheet.create({
    userTypeScreen: {
        backgroundColor: lightest_blue,
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
    },
    inputArea: {
        width: '90%',
        justifyContent: 'space-evenly',
    },
    screenTitle: {
        backgroundColor: white,
        color: medium_blue,
        fontWeight: 'bold',
        textAlign:"center",
        textAlignVertical: "center",
        fontSize: "20%"
    }
})

export function UserType({navigation}) {
    // Todo: Add database identification for different user types
    myUser = (type) => {
        navigation.navigate('Sign_up', {typ: type})
    }
    return (
        <KeyboardAvoidingView style={styles.userTypeScreen}>
            <TallFormBody>
                <Text style={styles.screenTitle}>Who are you?</Text>
                <View style={styles.inputArea}>
                    <UserTypeButton
                        buttonText={"Donor"}
                        onPress={() => {myUser("Donor")}}
                    />
                    <UserTypeButton
                        buttonText={"Shelter"}
                        onPress={() => {myUser("Shelter")}}
                    />
                </View>
            </TallFormBody>
            <BackButton onPress={() => {navigation.navigate('LoginScreen')}}/>
        </KeyboardAvoidingView>
    )
}