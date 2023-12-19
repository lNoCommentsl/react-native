import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from '../components/ui/Layout';
import {colors, globalStyles} from '../assets/styles/globalStyles';
import CurrencyPicker from 'react-native-currency-picker';
import {useAsyncStorage} from "../helpers/_hooks";
import {useTabContext} from "../context/context";
import Btn from "../components/ui/Button";

export const ProfileScreen = () => {
    const currencyPickerRef = false;
    const {data, setData, removeData} = useAsyncStorage('selectedCurrency', '');
    const {removeData: removeUserLoginData} = useAsyncStorage('isUserLogin', '');
    const {selectedCurrency, setSelectedCurrency, setUserLogin} = useTabContext();
    const handleCurrencySelect = (data) => {
        setData(data)
        setSelectedCurrency(data)
    };
    const logout = () => {
        setUserLogin(false);
        removeUserLoginData();
    };

    return (
        <Layout>
            <Text style={globalStyles.h1}>Setup your profile</Text>
            <View style={styles.wrapper}>
                <Text style={[globalStyles.h3, styles.currency, globalStyles.medium]}>Your currency:</Text>
                <CurrencyPicker
                    currencyPickerRef={currencyPickerRef}
                    enable={true}
                    darkMode={false}
                    currencyCode={data.code ?? 'CAD'}
                    showFlag={true}
                    showCurrencyName={true}
                    onSelectCurrency={handleCurrencySelect}
                    showNativeSymbol={true}
                    modalStyle={{
                        container: {
                            paddingTop: 90,
                        }
                    }}
                    title={'Change your currency'}
                    searchPlaceholder={'Search'}
                    showCloseButton={true}
                    showModalTitle={true}
                />
            </View>
            <Btn title="Logout" type={'warning'} onPress={logout}/>
        </Layout>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: colors.bg,
        backgroundColor: colors.bg,
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2,
    },
    currency: {
        marginBottom: 10
    }

});
