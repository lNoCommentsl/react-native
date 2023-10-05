import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, SectionList, TouchableHighlight} from "react-native";
import {Feather, MaterialIcons, FontAwesome, Entypo, AntDesign, createIconSet} from '@expo/vector-icons';
import {colors, globalStyles} from "../assets/styles/globalStyles";
import {useNavigation} from "@react-navigation/native";
import {priceFormatted} from "../helpers/helpers";
import {useTabContext} from "../context/context";


export interface ITransactionItem {
    id?: number;
    icon?: JSX.Element;
    category?: string;
    comment?: string;
    transactionType: 'expense' | 'income' | 'transfer',
    amount?: string;
}

interface ISectionItem {
    title: string;
    sum: string;
    data: ITransactionItem[];
}


const Transaction = ({icon, category, comment, amount, transactionType}) => {
    return (
        <View style={style.container}>
            <View style={style.icon}>{icon}</View>
            {/*<MaterialIcons color={'black'} name={'caretdown'}/>*/}
            <View style={style.info}>
                <Text style={[globalStyles.h3, globalStyles.medium]}>{category}</Text>
                <Text style={globalStyles.h4}>{comment}</Text>
            </View>
            <View style={style.price}>
                {transactionType == 'transfer' ? icon.transfer : ''}
                <Text
                    style={[globalStyles.h3, globalStyles.medium, style.spend, style[transactionType]]}>{transactionType == 'expense' ? '-' : ''}{priceFormatted(Number(amount))}</Text>
            </View>
        </View>)
}

const Header = ({title, sum}) => {
    return (<View style={style.header}>
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={globalStyles.h2}>{title}</Text>
            <Text style={[globalStyles.h3, globalStyles.medium]}>{priceFormatted(Number(sum))}</Text>
        </View>
        <View style={globalStyles.hr}></View>
    </View>);
}


const TransactionList: React.FC = () => {
    const navigation = useNavigation();
    const {transactionList} = useTabContext();
    const groupItems = [];
    console.log(transactionList)
    if(transactionList?.length > 0){
        transactionList.map((transaction) => {
    // groupItems.includes(transaction'title', )
    })
    }
    const DATA = [
            {
                title: '14.09.2023',
                sum: '220',
                data: transactionList,
            },
    ];

    const keyExtractor = (item: ITransactionItem) => item?.id?.toString();

    const renderItem = ({item}: { item: ITransactionItem }) => <Transaction {...item} />;

    const renderSectionHeader = ({section}: { section: ISectionItem }) => (
        <Header title={section.title} sum={section.sum}/>
    );

    const toggleModal = () => {
        navigation?.navigate('Modal');
    };

    return (<View style={[globalStyles.flex]}>
            <Text style={[globalStyles.h2, globalStyles.medium, style.title]}>Transaction list</Text>
            {DATA && DATA.length > 0 ?
                <SectionList
                    style={style.section}
                    sections={DATA}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    stickySectionHeadersEnabled={false}
                /> : <View><Text>No Transaction </Text></View>}
            <TouchableHighlight onPress={toggleModal} style={globalStyles.btnCircle} underlayColor={colors.secondary}>
                <AntDesign name="plus" size={24} color={colors.black}/>
            </TouchableHighlight>
        </View>

    );
};


export default TransactionList;

const style = StyleSheet.create(
    {
        section: {
            flex: 1,
        },
        title: {
            marginTop: 40
        },
        expense: {
            color: colors.warning
        },
        income: {
            color: colors.secondary
        },
        transfer: {
            color: colors.gray
        },
        container: {
            margin: 2,
            padding: 10,
            backgroundColor: colors.bg,
            borderRadius: 30,
            marginTop: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.29,
            shadowRadius: 1,
            elevation: 7,

        },
        info: {
            alignContent: 'center',
            flex: 0.8,
        },
        spend: {
            paddingHorizontal: 10,
            alignContent: 'center',
        },
        date: {
            marginLeft: 5
        },
        icon: {
            backgroundColor: colors.gray,
            borderRadius: 25,
            padding: 10,
            marginRight: 15
        },
        header: {
            marginTop: 40,
        },
        price: {
            flexDirection: 'row',
            // justifyContent: 'center',
            // alignContent: "center",
            alignItems: 'center'
        }


    }
)
export {TransactionList, Transaction, Header};