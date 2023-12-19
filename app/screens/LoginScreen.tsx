import React from 'react';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Layout from "../components/ui/Layout";
import {Formik} from "formik";
import {Input} from "../components/ui/Input";
import {useTabContext} from "../context/context";
import {globalStyles} from "../assets/styles/globalStyles";
import {useAsyncStorage} from "../helpers/_hooks";
import Btn from "../components/ui/Button";

export const LoginScreen = ({navigation}) => {
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

    const loginValues = {login: '', password: ''}
    return (<Layout>
        <Text style={globalStyles.h1}>Login</Text>
        <Formik initialValues={loginValues} onSubmit={(values) => handleSubmit(values)}>
            {({handleChange, handleBlur, handleSubmit, setFieldValue, isValid, values}) => (
                <KeyboardAwareScrollView>
                    {/*<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>*/}
                    <Input type={'default'} onChangeText={handleChange('login')}
                           onBlur={handleBlur('login')}
                           placeholder={'Enter your login '} value={values.login}
                           label={"Login"}
                    />
                    <Input secureTextEntry={true} onChangeText={handleChange('password')}
                           onBlur={handleBlur('password')}
                           placeholder={'Enter your password '} value={values.password}
                           label={"Password"}
                    />
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ResetPassword")}><Text style={globalStyles.linkText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}>
                        <Text style={globalStyles.linkText}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
                    <Btn title="Login" type={'primary'} onPress={handleSubmit}/>
                    {/*</TouchableWithoutFeedback>*/}
                </KeyboardAwareScrollView>
            )}
        </Formik>
    </Layout>);
}

const styles = StyleSheet.create({
    layout: {backgroundColor: 'red'},

    scroll: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});