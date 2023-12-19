import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {ResetPasswordScreen} from '../screens/ResetPasswordScreen';

const Stack = createStackNavigator();

const LoginNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false, title: 'Login'}
                }
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false, title: 'Register'}}
            /><
            Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={{headerShown: false, title: 'ResetPassword'}}
            />

        </Stack.Navigator>
    );
};

export {LoginNavigation};
