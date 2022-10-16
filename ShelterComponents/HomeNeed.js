import { KeyboardAvoidingView, StyleSheet, Text, Dimensions, TouchableOpacity, View} from "react-native";
import React from 'react';
import homeBread from "../imgs/shelter/bread-need.png";
import homeFruit from "../imgs/shelter/fruit-need.png";
import homeShirts from "../imgs/shelter/shirts-need.png";
import homeNeed from "../imgs/shelter/need.png";
import { Image } from "react-native";

const styles = StyleSheet.create({
    title: {
        width: 62,
        height: 25,
        top: Dimensions.get('window').height / 2.1,
        left: 15
    },

    categories: {
        flex: 2,
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 3.5,
        resizeMode: 'contain',
        top: Dimensions.get('window').height / 2.1,
        marginLeft: 15 
    }, 

    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        width: Dimensions.get('window').width - 50,
        left: 25
    }
})

export function HomeNeed({navigation}) {
    return (
        <> 
            <Image source={homeNeed} style={styles.title}/>

            <View style={styles.row}>

                <TouchableOpacity style={styles.button}>
                    <Image source={homeBread} style={styles.categories}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={homeShirts} style={styles.categories}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={homeFruit} style={styles.categories}/>
                </TouchableOpacity>


                <Image source={homeFruit} style={styles.categories}/>
            </View>
        </>
    )
}