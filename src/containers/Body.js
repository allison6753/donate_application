import {View, StyleSheet, Dimensions} from 'react-native'
import { white } from '../constants/globals'

const styles = StyleSheet.create({
    standardBody: {
        alignItems: "center",
        justifyContent: "space-evenly",
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width
    },
    coupledBody: {
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 0.3,
        width: "80%"
    },
    formBody: {
        alignItems: "center",
        backgroundColor: white,
        justifyContent: "space-evenly",
        height: "60%",
        width: "80%"
    },
    tallFormBody: {
        alignItems: "center",
        backgroundColor: white,
        justifyContent: "space-evenly",
        height: "70%",
        width: "80%"
    }
})
export function StandardBody(props) {
    return (
        <View style={styles.standardBody}>{props.children}</View>
    )
}
export function CoupledBody(props) {
    return (
        <View style={styles.coupledBody}>{props.children}</View>
    )
}
export function FormBody(props) {
    return (
        <View style={styles.formBody}>{props.children}</View>
    )
}
export function TallFormBody(props) {
    return (
        <View style={styles.tallFormBody}>{props.children}</View>
    )
}