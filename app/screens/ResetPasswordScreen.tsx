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

export const ResetPasswordScreen = ({navigation}) => {
    const {isUserLogin, setUserLogin} = useTabContext();
    const {setData} = useAsyncStorage('isUserLogin', '');
    const handleSubmit = (values) => {
        setData(false)
        setUserLogin(false)
    };
    if (isUserLogin) {
        return null
    }

    const loginValues = {name: '', password: ''}
    return (<Layout>
        <Text style={globalStyles.h1}>Reset Password</Text>
        <Formik initialValues={loginValues} onSubmit={(values) => handleSubmit(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <KeyboardAwareScrollView>
                    {/*<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>*/}
                    <Input type={'default'} onChangeText={handleChange('name')}
                           onBlur={handleBlur('name')}
                           placeholder={'Enter your name'} value={values.name}
                           label={"Name"}
                    />
                    <Btn title="Reset" type={'warning'} onPress={handleSubmit}/>
                    <Btn title="Back" type={'primary'} onPress={()=>navigation.navigate('Login')}/>
                    {/*</TouchableWithoutFeedback>*/}
                </KeyboardAwareScrollView>
            )}
        </Formik>
    </Layout>);
}
