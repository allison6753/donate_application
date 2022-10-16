import logo from '../../assets/logo.png';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native'
import { medium_orange, white } from "../constants/globals"

export function Heading(props) {
    const styles = StyleSheet.create({
        Heading: {
            paddingTop: 75,
            height: "30%",
            resizeMode: "contain",
            maxWidth: "100%",
            justifyContent:"center",
            alignItems:"center",
        },
        text: {
            color: medium_orange,
            width: "100%",
            height: "15%",
            fontSize: 18,
            fontWeight: "bold"
        }
    })
    return (
        <View style={styles.Heading}>
            <Image source={logo} style={{resizeMode:'contain', maxWidth:"80%"}}/>
        </View>
        
    )
}
export function HeadingContainer(props) {
    var backgroundColor = props.backgroundColor != undefined ? props.backgroundColor: white
    const styles = StyleSheet.create({
        Heading: {
            height: Dimensions.get('window').height * props.height,
            resizeMode: "contain",
            maxWidth: "100%",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 20,
            backgroundColor: backgroundColor
        }
    })
    return (
        <View style={styles.Heading}>
            {props.children}
        </View>
        
    )
}