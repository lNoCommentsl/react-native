import {Animated, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, fonts, globalStyles, tab} from "../../assets/styles/globalStyles";
import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Icon} from "./icons";

const toggleBottomTabs = (tabNavigator, display) => {
    if (display == 'hide') {
        tabNavigator.setOptions({
            tabBarStyle: {display: 'none'}
        })
        return
    }
    tabNavigator.setOptions({
        tabBarStyle: tab.barStyle
    })
}

const KeyboardView = ({value, setValue, openCategory, isVisible, setVisible}) => {
    const translateY = new Animated.Value(400);
    const navigation = useNavigation()
    const parent = navigation.getParent();
    useEffect(() => {
        if (isVisible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 600,
                useNativeDriver: false,
            }).start();
        }
        toggleBottomTabs(parent, 'hide');
    }, [isVisible]);
    console.log(isVisible)
    const CATEGORY = 'Select Category';
    const CLEAR = 'clear';
    const CLOSE = 'close';
    const keyBoard = [
        [CATEGORY, CLEAR],
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['.', '0', CLOSE],
    ];
    const renderKey = (key) => {
        if (key == CLOSE) {
            return Icon.down
        }
        if (key == CLEAR) {
            return Icon.left
        }
        return key;
    }

    const closeKeyboard = () => {
        Animated.timing(translateY, {
            toValue: 400,
            duration: 500,
            useNativeDriver: false,
        }).start(() =>
            setVisible(false)
        );
    };

    const pressKey = (key) => {
        if (key !== CLEAR && key !== CATEGORY && key !== CLOSE) {
            if (key === '.' && (value === '0' || value.length === 0)) {
                setValue('0' + key);
            } else {
                if (value == '0' && key !== '.' && value.toString().length === 1) {
                    setValue(key);
                } else {
                    setValue(value + key);
                }
            }
        }
        if (key === CLEAR) {
            if (value.length > 0) {
                setValue(value.slice(0, -1));
            } else {
                setValue('0');
            }
        }
        if (key === CLOSE) {
            closeKeyboard();
        }
        if (key === CATEGORY) {
            openCategory()
        }
    };


    return (
        <Animated.View style={[styles.keyboard, {transform: [{translateY}]}]}>
            {keyBoard && keyBoard.map((row, index) => (
                <View style={styles.row} key={index}>
                    {row.map((key, keyIndex) => (
                        <TouchableOpacity
                            style={[
                                styles.key,
                                index === 0 && keyIndex === 0 ? globalStyles.flex : null,
                            ]}
                            key={keyIndex}
                            onPress={() => pressKey(key)}
                        >
                            <Text style={styles.keyText}>{renderKey(key)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
        keyboard: {
            backgroundColor: colors.white,
            position: 'absolute',
            width: '100%',
            bottom: 0,
            right: 0,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        key: {
            backgroundColor: colors.bg,
            width: 90,
            height: 60,
            borderRadius: 30,
            margin: 5,
            borderWidth: 1,
            borderColor: colors.bg,
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
        },
        keyText: {
            lineHeight: 60,
            color: colors.black,
            fontSize: 26,
            fontFamily: fonts.neueMontreal
        }
    }
);

export {KeyboardView, toggleBottomTabs}