import React from 'react'
import {Text, View, StyleSheet} from "react-native";
import {useTabContext} from "../context/context";
import {colors, fonts, globalStyles} from "../assets/styles/globalStyles";
import {priceFormatted} from "../helpers/helpers";

const currencyList = require("../assets/static/curency.json")

const CurrentBalance = () => {
    const {defaultCurrency, totalAmount} = useTabContext();

    return (<View>
            <View style={[style.center, style.balance]}>
                <Text style={[style.text, globalStyles.h1]}>Your Total Balance:</Text>
                <Text style={[style.text, globalStyles.h1]}>{priceFormatted(123456.99)}</Text>
            </View>
            <View style={style.wrapper}>
                <View style={[style.center, style.container, style.mr10]}>
                    <Text style={[style.text, globalStyles.h5]}>Your Income:</Text>
                    <Text style={[style.text, globalStyles.h4]}>{priceFormatted(totalAmount)}</Text>
                </View>
                <View style={[style.center, style.container, style.mr10]}>
                    <Text style={[style.text, globalStyles.h5]}>Your Monthly balance:</Text>
                    <Text style={[style.text, globalStyles.h4]}>{priceFormatted(totalAmount)}</Text>
                </View>
                <View style={[style.center, style.container, style.expenses ]}>
                    <Text style={[style.text, globalStyles.h5]}>Your expenses:</Text>
                    <Text style={[style.text, globalStyles.h4]}>{priceFormatted(29.20)}</Text>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create(
    {
        wrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        container: {
            flex: 1,
            backgroundColor: colors.secondary,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center",
            height: 70,
        },
        mr10: {
            marginRight: 10
        },
        expenses:{
            backgroundColor: colors.warning
        },
        balance: {
            backgroundColor: colors.primary,
            height: 100,
            borderRadius: 15,
            marginVertical: 10,
        },
        center: {
            // alignItems: "flex-start",
            justifyContent: "center"
        },
        text: {
            textAlign: 'center',
            fontSize: 20,
            fontFamily: fonts.neueMontreal
        }
    }
)
export {CurrentBalance};