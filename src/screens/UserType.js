import { KeyboardAvoidingView, StyleSheet, View, Text, Dimensions } from 'react-native'
import { TallFormBody } from "../containers/Body"
import React from 'react';
import { BackButton, UserTypeButton } from '../components/buttons'
import { medium_orange, light_orange, white } from '../constants/globals'

const styles = StyleSheet.create({
    userTypeScreen: {
        backgroundColor: light_orange,
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
        color: medium_orange,
        fontWeight: 'bold',
        textAlign:"center",
        textAlignVertical: "center",
        fontSize: "20%"
    }
})

export function UserType({navigation}) {
    // Todo: Add database identification for different user types
    myUser = (type) => {
        navigation.navigate('Sign_up', {userType: type})
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
            <BackButton onPress={() => {navigation.navigate('Login')}}/>
        </KeyboardAvoidingView>
    )
}