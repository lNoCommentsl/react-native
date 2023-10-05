import React, {useEffect, useState} from "react";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Pressable, Platform
} from "react-native";
import {colors, fonts, globalStyles} from "../assets/styles/globalStyles";
import {RadioButton} from "./ui/Radio";
import {priceFormatted} from "../helpers/helpers";
import {Input} from "./ui/Input";
import Btn from "./ui/Button";
import {KeyboardView, toggleBottomTabs} from "./ui/KeyboardView";
import {useNavigation} from "@react-navigation/native";
import {iconDetails} from "../components/ui/icons";
import {v4 as uuidv4} from 'uuid';

import IconPicker from "react-native-icon-picker";

import {Formik} from "formik";
import {useTabContext} from "../context/context";
import {useAsyncStorage} from "../helpers/_hooks";
import {InputDatePicker} from "./ui/InputDatePicker";


const TransactionForm = () => {

    const {transactionList: transactionListContext, setTransactionList} = useTabContext();

    const [amount, setAmount] = useState(0);
    const [isKeyBoardVisible, setKeyBoardVisible] = useState(true);
    const {data: transactionList, setData} = useAsyncStorage('transactionList', []);
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const navigation = useNavigation()
    const id = uuidv4();
    const parent = navigation.getParent();

    const transactionTypes = [
        'expense',
        'income',
        'transfer',
    ]
    const transactionValues = {
        id: id,
        'icon': '',
        "category": "",
        'date': '',
        'comment': '',
        "transactionType": transactionTypes[0],
        'amount': 0
    }
    useEffect(() => {
    }, [isKeyBoardVisible]);

    const [option, setOption] = useState(transactionTypes[0]);



    const pressInput = () => {
        setKeyBoardVisible(false)
    }

    const handleSubmit = (values) => {
        setData([...transactionList, values])
        setTransactionList([...transactionList, values])
        handleClose();
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    const handleClose = () => {
        toggleBottomTabs(parent, 'show');
        navigation.navigate('Home');
    };


    const openKeyboard = () => {
        setKeyBoardVisible(true);
    };

    return (
        <Formik initialValues={transactionValues} onSubmit={(values) => handleSubmit(values)}>
            {({handleChange, handleBlur, handleSubmit, setFieldValue, isValid, values}) => (
                <>
                    <KeyboardAwareScrollView>
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                            <View style={styles.modalContainer}>
                                <Text style={globalStyles.h1}>Add Transaction</Text>
                                <RadioButton data={transactionTypes}
                                             onSelect={(option) => {
                                                 setOption(option);
                                                 setFieldValue('transactionType', option);
                                             }}
                                             container={styles.transactionType}
                                             selected={option}
                                />
                                <TouchableOpacity
                                    style={styles.amount}
                                    onPressIn={openKeyboard}
                                    onPress={dismissKeyboard}>
                                    <Text
                                        style={styles.amountText}>{priceFormatted(Number(amount))}</Text>
                                </TouchableOpacity>
                                <View style={[globalStyles.hr, styles.hr]}></View>
                                <View style={styles.iconList}>
                                    <IconPicker
                                        showIconPicker={showIconPicker}
                                        toggleIconPicker={() => setShowIconPicker(!showIconPicker)}
                                        iconDetails={iconDetails}
                                        headerTitle={'Select Category'}
                                        onSelect={(icon) => console.log(icon)}
                                        content={<Text style={[globalStyles.h4, styles.iconList]}>Select
                                            Category</Text>}
                                    /></View>
                                <InputDatePicker label={'Date'} date={date} setDate={setDate} setFieldValue={setFieldValue} />
                                <Input type={'default'} onChangeText={handleChange('comment')}
                                       onBlur={handleBlur('comment')}
                                       multiline={true}
                                       placeholder={'Add your comment'} value={values.comment}
                                       label={"Comment"} onPressIn={pressInput}
                                />
                                <Btn title="Add" type={'primary'} onPress={handleSubmit}/>
                                <Btn title="Close" type={'warning'} onPress={handleClose}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAwareScrollView>
                    <KeyboardView value={amount} setValue={(amount) => {
                        setAmount(amount);
                        setFieldValue('amount', amount);
                    }}
                                  isVisible={isKeyBoardVisible} setVisible={setKeyBoardVisible}
                                  openCategory={() => setShowIconPicker(!showIconPicker)}/>
                </>
            )}

        </Formik>)
}


const styles = StyleSheet.create({
    transactionType: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 5,
        backgroundColor: colors.bg,
        borderRadius: 20
    },

    pressable: {
        width: '100%',
    },
    hr: {
        marginVertical: 15,
    },
    iconList: {
        alignSelf: 'stretch',
        marginBottom: 15
    },
    modalContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    amountText: {
        fontSize: 30,
        fontFamily: fonts.neueMontreal
    },

});

export {TransactionForm}