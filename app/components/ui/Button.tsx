import React from 'react';
import {TouchableOpacity, Text, TouchableHighlight, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts, globalStyles} from "../../assets/styles/globalStyles";

// Define the prop types using TypeScript interfaces
interface IButtonProps {
    title?: string;
    icon?: string;
    type?: 'primary'|'warning'|'default';
    onPress?: () => void;
    styles?:{}|StyleSheet,
}

// Create the Button component
const Btn: React.FC<IButtonProps> = ({title, icon, type ="default", onPress,styles}) => {
    const btnStyles = [stylesBtn.btn, stylesBtn[type + 'Btn'], styles];

    return (
        <TouchableHighlight onPress={onPress} style={btnStyles} underlayColor={colors.secondary}>
            <View>
                {title && <Text style={[globalStyles.h4, type == "warning"? stylesBtn.warningBtnText:null] }>{title}</Text>}
                {icon}
            </View>
        </TouchableHighlight>
    );
};

const stylesBtn = StyleSheet.create({
    primaryBtn:{
        backgroundColor: colors.primary,
    },
    warningBtn:{
        backgroundColor: colors.warning,
    },
    defaultBtn:{
        borderColor: colors.primary,
        borderWidth:1,
    },
    btn: {
        borderRadius: 30,
        paddingVertical: 15,
        alignSelf: "stretch",
        alignItems: "center",
        alignContent: "center",
        marginBottom: 15,
        marginHorizontal: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    warningBtnText:{
        color: colors.white,
    },

});

export default Btn;
