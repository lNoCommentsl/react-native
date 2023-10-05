import React from 'react'
import {SafeAreaView, View, ScrollView} from "react-native";
import {globalStyles} from '../../assets/styles/globalStyles'
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

const Layout = ({children}) => {
    return <SafeAreaView style={[globalStyles.container, globalStyles.flex]}>
        <View style={[globalStyles.main]}>
            {children}
        </View>
    </SafeAreaView>
}


export default Layout