import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const useLanguage = () => {
    
    const setLanguage = async ( lang = 'es' ) => {
        await AsyncStorage.setItem('myLanguage', lang);
    };

    useEffect(() => {
      setLanguage();
    }, [])
    
}
 
export default useLanguage;