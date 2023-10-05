import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import {TabProvider} from './app/context/context';
import {Navigation} from "./app/navigation/navigation";
import {useCallback} from "react";
import {colors, globalStyles} from "./app/assets/styles/globalStyles";

// SplashScreen.preventAutoHideAsync();

export default function App() {
    let [loaded] = useFonts({
        NeueMedium: require('./app/assets/fonts/NeueMontreal-Medium.otf'),
        NeueRegular: require('./app/assets/fonts/NeueMontreal-Regular.otf'),
    });

    if (!loaded) {
        return null
    }
    return (
        <TabProvider>
            <Navigation/>
            <StatusBar style="auto"/>
        </TabProvider>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
