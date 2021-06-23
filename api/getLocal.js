import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export async function getLocal(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.log(e);
    }
}