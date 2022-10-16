import { KeyboardAvoidingView, StyleSheet, Dimensions, View, Image} from "react-native";
import { white } from '../constants/globals';
import React from 'react';


const styles = StyleSheet.create({
    homeScreen: {
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: "center"
    },
})

// For demo purposes
export function Home({navigation}) {
    return (
        <KeyboardAvoidingView style={styles.homeScreen}>
    <View style={styles.container}>
        <Image source={require('../../assets/donor_homescreen.png')} resizeMode="contain" style={styles.image}>
    </Image>
  </View>
  </KeyboardAvoidingView>
    )
}