export async function storeLocal() {
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_key', jsonValue)
    } catch (e) {
        // saving error
    }
}