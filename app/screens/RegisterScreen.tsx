import React from 'react';
import {Text, TouchableOpacity, View,} from 'react-native';
import Layout from "../components/ui/Layout";
import {globalStyles} from "../assets/styles/globalStyles";
import {Formik} from "formik";
import {Input} from "../components/ui/Input";
import {useTabContext} from "../context/context";
import {useAsyncStorage} from "../helpers/_hooks";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Btn from "../components/ui/Button";

export const RegisterScreen = ({navigation}) => {
    const {isUserLogin, setUserLogin} = useTabContext();
    const {setData} = useAsyncStorage('isUserLogin', '');
    const handleSubmit = (values) => {
        setData(true)
        setUserLogin(true)
    };
    if (isUserLogin) {
        console.log('You alrady logedin');
        navigation.navigate('Transactions')
    }

    const loginValues = {name: '', password: ''}
    return (<Layout>
        <Text style={globalStyles.h1}>Register</Text>
        <Formik initialValues={loginValues} onSubmit={(values) => handleSubmit(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <KeyboardAwareScrollView>
                    {/*<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>*/}
                    <Input type={'default'} onChangeText={handleChange('name')}
                           onBlur={handleBlur('name')}
                           placeholder={'Enter your name'} value={values.name}
                           label={"Name"}
                    />
                    <View style={{flexDirection:'row'}}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={globalStyles.linkText}>Login</Text>
                    </TouchableOpacity>
                    </View>
                    <Btn title="Register" type={'primary'} onPress={handleSubmit}/>
                    {/*</TouchableWithoutFeedback>*/}
                </KeyboardAwareScrollView>
            )}
        </Formik>
    </Layout>);
}
