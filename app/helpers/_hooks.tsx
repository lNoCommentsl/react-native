import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from "react-native";


export function useAsyncStorage(key, initialValue) {
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        // Fetch data from AsyncStorage when the component mounts
        const fetchData = async () => {
            try {
                const storedData = await AsyncStorage.getItem(key);
                if (storedData !== null) {
                    setData(JSON.parse(storedData));
                }
            } catch (error) {
                console.error(`Error fetching data from AsyncStorage for key "${key}":`, error);
            }
        };

        fetchData();
    }, [key]);
    // Function to set data in AsyncStorage
    const setDataInStorage = async (newValue) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(newValue));
            setData(newValue);
        } catch (error) {
            console.error(`Error setting data in AsyncStorage for key "${key}":`, error);
        }
    };

    // Function to remove data from AsyncStorage
    const removeDataFromStorage = async (p: any[]) => {
        try {
            await AsyncStorage.removeItem(key);
            setData(initialValue);
        } catch (error) {
            console.error(`Error removing data from AsyncStorage for key "${key}":`, error);
        }
    };
    return { data, setData: setDataInStorage, removeData: removeDataFromStorage };
}