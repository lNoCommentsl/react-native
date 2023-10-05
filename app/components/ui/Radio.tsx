import React, {useRef, useState} from "react";
import {View, Text, Pressable} from "react-native";
import {StyleSheet} from 'react-native';
import {colors} from "../../assets/styles/globalStyles";

const styles = StyleSheet.create({
    option: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    text:{
        color: colors.black,
        textAlign:"center",
    },
    selected: {
        borderRadius: 15,
        backgroundColor: colors.primary,
    },
});
const RadioButton = ({data, onSelect, selected, container}) => {
    const [userOption, setUserOption] = useState(selected ?? null);
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    };

    return (
        <View style={container ?? null}>
            {data.map((item, index) => {
                return (<Pressable style={[styles.option,
                    item === userOption ? styles.selected : null
                ]}
                                   key={index}
                                   onPress={() => selectHandler(item)}>
                    <Text style={styles.text}> {item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                </Pressable>)
            })}
        </View>
    );
}

export {RadioButton}