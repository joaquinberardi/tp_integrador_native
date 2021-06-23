import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export async function storeLocal(key, value) {
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e);
    }
}