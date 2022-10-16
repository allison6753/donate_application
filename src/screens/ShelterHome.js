import { KeyboardAvoidingView, StyleSheet, Dimensions} from "react-native";
import React from 'react';
import homeTop from "../../imgs/shelter/home-top-1.png";
import menu from "../../imgs/shelter/menu.png";
import { Image } from "react-native";
import { HomeCategory } from "../../ShelterComponents/HomeCategory";
import { HomeNeed } from "../../ShelterComponents/HomeNeed";

const styles = StyleSheet.create({
    homeScreen: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
    },

    topContainer: {
        flex: 1,
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.45,
        resizeMode: 'contain',
        position: 'absolute',
        top: 15
    }, 

    botContainer: {
        flex: 1,
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').width / 2.5,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 4,
        left: '16%'
    }, 
})

export function ShelterHome({navigation}) {
    return (
        <KeyboardAvoidingView style={styles.homeScreen}>
            <Image source={homeTop} style={styles.topContainer}/>
            <HomeCategory />
            <HomeNeed />
            <Image source={menu} style={styles.botContainer}/>
        </KeyboardAvoidingView>
    )
}