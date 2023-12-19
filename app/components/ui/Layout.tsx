import React from 'react'
import {SafeAreaView, View} from "react-native";
import {globalStyles} from '../../assets/styles/globalStyles'

class Layout extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return <SafeAreaView style={[globalStyles.container, globalStyles.flex]}>
            <View style={[globalStyles.main]}>
                {children}
            </View>
        </SafeAreaView>
    }
}


export default Layout