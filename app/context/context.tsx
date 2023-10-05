import React, { createContext, useContext, useEffect, useState } from 'react';
import {  Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IContext {
    selectedCurrency: YourCurrencyType;
    transactionList: ITransactionItem[];
    walletLists: any[];
    setSelectedCurrency: (selectedCurrency: YourCurrencyType) => void;
    setTransactionList: (transactionList: ITransactionItem[]) => void;
    setWalletListsItem: (walletLists: any[]) => void;
}

const TabContext = createContext<IContext | undefined>(undefined);

export const TabProvider: React.FC = ({ children }) => {
    const [selectedCurrency, setSelectedCurrency] = useState<YourCurrencyType>(
        {} as YourCurrencyType
    );
    const [transactionList, setTransactionList] = useState<ITransactionItem[]>([]);
    const [walletLists, setWalletLists] = useState<any[]>([]);
    const [appSettingsInitialized, setAppSettingsInitialized] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedCurrency = await AsyncStorage.getItem('selectedCurrency');
                if (storedCurrency) {
                    setSelectedCurrency(JSON.parse(storedCurrency));
                }

                const storedTransactionData = await AsyncStorage.getItem(
                    'transactionList'
                );
                if (storedTransactionData) {
                    setTransactionList(JSON.parse(storedTransactionData));
                }

                const storedWalletList = await AsyncStorage.getItem('walletList');
                if (storedWalletList) {
                    setWalletLists(JSON.parse(storedWalletList));
                }

                setAppSettingsInitialized(true);
            } catch (error) {
                console.error(
                    'Error fetching data from AsyncStorage for key "selectedCurrency":',
                    error
                );
            }
        };

        fetchData();
    }, []);

    if (!appSettingsInitialized) {
        return <Text>Loading</Text>;
    }

    const contextValue: IContext = {
        selectedCurrency,
        transactionList,
        walletLists,
        setSelectedCurrency,
        setTransactionList,
        setWalletListsItem: (walletLists) => setWalletLists(walletLists),
    };

    return (
        <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
    );
};

export const useTabContext = (): IContext => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};
