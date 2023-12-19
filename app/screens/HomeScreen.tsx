import React, {useEffect} from 'react'
import Layout from "../components/ui/Layout";
import {CurrentBalance} from "../components/CurrentBalance";
import {TransactionList} from "../components/Transaction";
import {useAsyncStorage} from "../helpers/_hooks";

export const HomeScreen = ({navigation}) => {
    return <Layout>
        <CurrentBalance/>
        <TransactionList/>
    </Layout>
}




