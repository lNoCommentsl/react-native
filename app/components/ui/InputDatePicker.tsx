import {Platform, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "./Button";
import React, {useState} from "react";
import {colors, globalStyles} from "../../assets/styles/globalStyles";


const InputDatePicker = ({label, date, setDate, setFieldValue}) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    }
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const onChange = ({type}, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    const formattedDate = (selectedDate) => {
        return `${(selectedDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}-${selectedDate.getFullYear()}`;

    }
    return (
        <View style={styles.inputWrapper}>
            {label && <Text style={[styles.label, globalStyles.h4,]}>{label}</Text>}
            {!showDatePicker && (
                <Pressable onPress={toggleDatePicker} style={styles.pressable}>
                    <TextInput style={[styles.input, globalStyles.h4]}
                               onPressIn={toggleDatePicker}
                               editable={false}
                               onChangeText={onChange}
                               placeholder={'test date'}
                               value={formattedDate(date)}
                    />
                </Pressable>)}
            {showDatePicker && (<View style={styles.datePiker}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        onPickerDismiss={onChange}
                        is24Hour={true}
                        name={'date'}
                        display="spinner"
                        onChange={({type}, selectedDate) => {
                            onChange({type}, selectedDate), setFieldValue('date', formattedDate(date))
                        }}
                    />
                    {Platform.OS === 'ios' && (
                        <View style={styles.datePikerRow}>
                            <Btn title="Cancel" type={'warning'} onPress={toggleDatePicker}
                                 styles={styles.datePikerRowBtn}/>
                            <Btn title="Confirm" type={'primary'} onPress={toggleDatePicker}
                                 styles={styles.datePikerRowBtn}/>
                        </View>
                    )}
                </View>
            )}
        </View>)
}

export {InputDatePicker}

const styles = StyleSheet.create({
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
        paddingTop: 15,
        paddingBottom: 15,
    },
    datePikerRowBtn: {
        width: '48%'
    },
    inputWrapper: {
        marginBottom: 15,
        alignSelf: 'stretch',
    },
    label: {
        paddingBottom: 5,
    },
    datePiker: {
        marginTop: 10,
    },
    datePikerRow: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    pressable: {
        width: '100%',
    },
});
