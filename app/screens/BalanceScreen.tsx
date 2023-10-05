import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    ScrollView,
    Button,
    Keyboard,
} from 'react-native';
import Layout from "../components/ui/Layout";
import {globalStyles} from "../assets/styles/globalStyles";
import {Formik} from "formik";
import {Input} from "../components/ui/Input";

export const BalanceScreen = () => {
    console.log('BalanceScreen1')
    return (<Layout>
        <Text>Balance Screen</Text>
    </Layout>);
}


const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});