import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer, useIsFocused} from "@react-navigation/native";
import {BlurView} from 'expo-blur';

import {BalanceScreen} from "../screens/BalanceScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {WalletsScreen} from "../screens/WalletsScreen";
import {Feather, MaterialIcons, FontAwesome, Entypo} from '@expo/vector-icons';
import {SecondNavigation} from "./SecondNavigation";
import {colors, fonts, globalStyles, tab} from "../assets/styles/globalStyles";

const Tabs = createBottomTabNavigator();


export const Navigation = () => {
    function getIconColor() {
        const isFocused = useIsFocused();
        const iconColor = isFocused ? colors.black : colors.gray;
        return iconColor;
    }

    return <NavigationContainer>
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    color: colors.black,
                    fontSize: 10,
                    fontFamily: fonts.neueMontreal,
                },
                tabBarStyle: tab.barStyle,

                tabBarBackground: () => (
                    <BlurView tint={"dark"} intensity={20} style={[globalStyles.flex, tab.blur]}/>
                ),
            }}>
            <Tabs.Screen name="Transactions" component={SecondNavigation}
                         options={{
                             tabBarIcon: () => {
                                 const iconColor = getIconColor();
                                 return <Feather name="send" size={20} color={iconColor}/>
                             },
                         }}
            />

            <Tabs.Screen name="Balance" component={BalanceScreen}
                         options={({route}) => ({
                             tabBarIcon: () => {
                                 const iconColor = getIconColor();
                                 return (
                                     <MaterialIcons
                                         name="account-balance"
                                         size={20}
                                         color={iconColor}
                                     />
                                 );
                             },
                         })}

            />
            <Tabs.Screen name="Profile" component={ProfileScreen}
                         options={{
                             tabBarIcon: () => {
                                 const iconColor = getIconColor();
                                 return <FontAwesome name="user" size={20}
                                                     color={iconColor}/>
                             }
                         }}
            />

            <Tabs.Screen name="Wallets" component={WalletsScreen}
                         options={{
                             tabBarIcon: (focused) => {
                                 const iconColor = getIconColor();
                                 return <Entypo name="wallet" size={20}
                                                color={iconColor}/>
                             }
                         }}
            />
        </Tabs.Navigator>
    </NavigationContainer>
}

