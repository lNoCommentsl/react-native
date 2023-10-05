import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import Layout from "../components/ui/Layout";
import {useTabContext} from "../context/context";
import {globalStyles} from "../assets/styles/globalStyles";
import Btn from "../components/ui/Button";

export const WalletsScreen = () => {
    const {walletLists, setWalletItem} = useTabContext()
    console.log(walletLists)
    return <Layout>
        <Text style={globalStyles.h1}>
            Wallets Screen Screen Test
        </Text>
        {walletLists.length > 0? <View>
            <Text>Wallets List</Text>
        </View> : <View style={styles.wrapper}><Text>Create your wallet </Text></View>}
        <Btn title={'Add Wallet'} type={"primary"} styles={styles.btn}/>
    </Layout>
}


const styles = StyleSheet.create({
    wrapper:{
        marginVertical: 15
    },
    btn:{
        position:"absolute",
        bottom: 40,
        width:'100%'
    }
});