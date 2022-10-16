import { TouchableHighlight, StyleSheet, Text, View, Dimensions } from 'react-native'
import { medium_blue, gray, white, light_blue } from '../constants/globals';

const styles = StyleSheet.create({
    loginButton: {
        justifyContent: "center",
        backgroundColor: medium_blue,
        borderRadius: 20,
        borderColor: medium_blue,
        borderWidth: 3,
        width: "90%",
        height: "11%",
        alignItems: "center"

    },
    backButton: {
        justifyContent: "center",
        backgroundColor: medium_blue,
        borderRadius: 20,
        borderColor: medium_blue,
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
        borderRadius: 20,
        backgroundColor: white,
        borderColor: medium_blue,
        borderWidth: 3,
        width: "90%",
        height: "11%"
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
        color: medium_blue,
        textAlign:"center",
        textAlignVertical: "center"
    },
    userButton: {
        justifyContent: "center",
        borderRadius: 20,
        borderColor: medium_blue,
        borderWidth: 3,
        width: "90%",
        height: "13.5%",
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginTop: 20,
        alignSelf: 'center'
    },
    userText: {
        color: medium_blue,
        textAlign:"center",
        textAlignVertical: "center"
    },
    activateButtonText: {
        color: "black", 
        textAlign: "center", 
        fontSize: "40%",
        paddingBottom: 10
    },

    activateButtonSubText: {
        color: "black", 
        textAlign: "center", 
        fontSize: "15%"
    }
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
            onPress={props.onPress}
            style={props.styleButton ? props.styleButton : styles.SignUpButton}
            disabled={props.disabled ? props.disabled : false}>
            <Text style={props.styleText ? props.styleText : styles.SignUpText}>Sign Up</Text>
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

export function RemoveContact(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={styles.userButton}>
            <Text style={styles.SignUpText}>Remove Contact</Text>
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

export function ActivateButton(props) {
    return  (
        <TouchableHighlight onPress={props.onPress} style={styles.activateButton}>
            <View>
                <Text style={styles.activateButtonText}>ACTIVATE</Text>
                <Text style={styles.activateButtonSubText}>Alerts and Navigation</Text>
            </View>
        </TouchableHighlight>
    )
}
export function ListItemButton(props) {
    var customColor = props.backgroundColor != undefined ? props.backgroundColor : white
    var customStyle = StyleSheet.create({
        listItemButton: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.08,
            flexDirection: "row",

            justifyContent: 'center',
            paddingLeft: 15,
            borderColor: light_blue,
            borderWidth: 2
        }
    })
    return (
        <TouchableHighlight onPress={props.onPress} style= {customStyle.listItemButton}>
            {props.children}
        </TouchableHighlight>
        )
}
export function DefaultButton(props) {
    
    var backgroundColor = props.backgroundColor != undefined ? props.backgroundColor : light_blue
    var width = props.width != undefined ? props.width : "10%"
    var height = props.height != undefined ? props.height : "35%"
    var flex = props.flex !=undefined ? props.flex : 0
    var borderRadius = props.borderRadius !=undefined ? props.borderRadius : 20
    var borderColor = props.borderColor !=undefined ? props.borderColor : medium_blue
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