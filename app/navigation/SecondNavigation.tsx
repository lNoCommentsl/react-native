import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ModalScreen} from '../screens/ModalScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const SecondNavigation = () => {
    console.log('SecondNavigation')
    return (
        <Stack.Navigator initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false, title: 'Transactions'}
                }
            />
            <Stack.Screen
                name="Modal"
                component={ModalScreen}
                options={{headerShown: false, title: ''}}
            />
        </Stack.Navigator>
    );
};

export {SecondNavigation};
