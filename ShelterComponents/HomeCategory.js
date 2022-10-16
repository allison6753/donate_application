import { KeyboardAvoidingView, StyleSheet, Text, Dimensions, TouchableOpacity, View} from "react-native";
import React from 'react';
import homeFood from "../imgs/shelter/food-cat.png";
import homeMoney from "../imgs/shelter/money-cat.png";
import homeClothes from "../imgs/shelter/clothes-cat.png";
import homeCat from "../imgs/shelter/cat.png";
import { Image } from "react-native";

const styles = StyleSheet.create({
    title: {
        width: 140,
        height: 28,
        top: Dimensions.get('window').height / 2.3,
        left: 10
    },

    categories: {
        flex: 2,
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 3.5,
        resizeMode: 'contain',
        top: Dimensions.get('window').height / 2.3,
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

export function HomeCategory({navigation}) {
    return (
        <> 
            <Image source={homeCat} style={styles.title}/>

            <View style={styles.row}>

                <TouchableOpacity style={styles.button}>
                    <Image source={homeFood} style={styles.categories}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={homeMoney} style={styles.categories}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={homeClothes} style={styles.categories}/>
                </TouchableOpacity>


                <Image source={homeClothes} style={styles.categories}/>
            </View>
        </>
    )
}