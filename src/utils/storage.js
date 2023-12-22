import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
    static async getItem(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static async setItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }

    static async removeItem(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }
    static async clearAll() {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        }
    }
}