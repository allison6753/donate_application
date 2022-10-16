import { TouchableHighlight, StyleSheet, Text, View, Dimensions } from 'react-native'
import { light_orange, medium_orange, dark_orange, gray, white } from '../constants/globals';

const styles = StyleSheet.create({
    loginButton: {
        justifyContent: "center",
        backgroundColor: light_orange,
        borderRadius: 20,
        borderColor: light_orange,
        borderWidth: 3,
        width: "90%",
        height: "11%",
        alignItems: "center"

    },
    backButton: {
        justifyContent: "center",
        backgroundColor: medium_orange,
        borderRadius: 20,
        borderColor: medium_orange,
        borderWidth: 3,
        width: "70%",
        height: "5%",
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginTop: 40,
        alignSelf: 'center'

    },
    SignUpButton: {
        justifyContent: "center",
        backgroundColor: light_orange,
        borderRadius: 20,
        borderColor: light_orange,
        borderWidth: 3,
        width: "90%",
        height: "11%",
        alignItems: "center"
    },
    activateButton: {
        borderRadius: 200, 
        backgroundColor: gray,
        justifyContent: "center", 
        width: "77%",
        height: "40%"
    }, 

    loginButtonText: {
        color: white,
        textAlign:"center",
        textAlignVertical: "center"
    },

    signUpText: {
        color: white,
        textAlign:"center",
        textAlignVertical: "center"
    },
    userButton: {
        justifyContent: "center",
        borderRadius: 20,
        borderColor: medium_orange,
        borderWidth: 3,
        width: "90%",
        height: "13.5%",
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginTop: 20,
        alignSelf: 'center'
    },
    userText: {
        color: medium_orange,
        textAlign:"center",
        textAlignVertical: "center"
    },
})

export function LoginButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableHighlight>
    )
}
export function SignUpButton(props) {
    return (
        <TouchableHighlight
            onPress={props.onPress} style={styles.SignUpButton}>
            <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableHighlight>
    )

}
export function BackButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={styles.backButton}>
            <Text style={styles.loginButtonText}>Back</Text>
        </TouchableHighlight>
    )
}

export function UserTypeButton(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={styles.userButton}>
            <Text style={styles.userText}>{props.buttonText}</Text>
        </TouchableHighlight>
    )
}

export function DefaultButton(props) {
    
    var backgroundColor = props.backgroundColor != undefined ? props.backgroundColor : light_orange
    var width = props.width != undefined ? props.width : "10%"
    var height = props.height != undefined ? props.height : "35%"
    var flex = props.flex !=undefined ? props.flex : 0
    var borderRadius = props.borderRadius !=undefined ? props.borderRadius : 20
    var borderColor = props.borderColor !=undefined ? props.borderColor : medium_orange
    var styling = StyleSheet.create({
        backButton: {
            justifyContent: "center",
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            borderColor: borderColor,
            borderWidth: 3,
            width: width,
            height: height,
            flex: flex

    
        }
    })
    return (
        <TouchableHighlight onPress={props.onPress} style={styling.backButton}>
            {props.children}
        </TouchableHighlight>
    )
}