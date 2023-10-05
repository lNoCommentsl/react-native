import React from 'react';
import { Text, TextInput, View, InputAccessoryView, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {colors, globalStyles} from "../../assets/styles/globalStyles";

interface Input extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string,
}

const Input = ({ label, pressInput, ...props} :Input) => {
    const id = uuidv4();
    const {multiline} = props
    return (
        <View style={styles.inputWrapper}>
            <Text style={[styles.label, globalStyles.h4,]}>{label}</Text>
            <TextInput
                style={[styles.input, globalStyles.h4,  multiline && styles.multiline]}
                inputAccessoryViewID={id}
                placeholderTextColor={colors.gray}
                autoCorrect={false}
                {...props}
            />
            <InputAccessoryView nativeID={id}>
                <View style={styles.accessoryContainer}>
                    <Text style={[styles.label, globalStyles.h4, globalStyles.regular]}>{label}</Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{backgroundColor: 'red'}}>
                        <Text style={styles.label}>Hide</Text>
                    </TouchableWithoutFeedback>
                </View>
            </InputAccessoryView>
        </View>
    );
};

export {Input};

const styles = StyleSheet.create(
    {
        label: {
            paddingBottom: 5,
        },
        inputWrapper: {
            marginBottom: 15,
            alignSelf: 'stretch',
        },
        multiline:{
          minHeight:100,
        },
        input: {
            borderWidth: 1,
            borderColor: colors.bg,
            backgroundColor: colors.bg,
            borderRadius: 30,
            paddingHorizontal: 30,
            marginBottom: 10,
            marginHorizontal: 2,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.29,
            shadowRadius: 2,
            paddingTop:15,
            paddingBottom:15,
        },
        accessoryContainer: {
            backgroundColor: '#474747FF',
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor: '#646363',
            padding: 10,
            flexDirection: 'row',
        }
    }
)

