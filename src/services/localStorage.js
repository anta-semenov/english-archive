import {AsyncStorage} from 'react-native'
import * as storageKeys from '../constants/storageKeys'

const getItem = async (key: string) => {
  try {
    const savedItem = await AsyncStorage.getItem(key)
    if (savedItem) {
      return JSON.parse(savedItem)
    }
    return undefined
  } catch (e) {
    console.log(e);
    return undefined
  }
}

const setItem = async (key: string, value: any) => {
  //if (!value || value == null) return

  const serializedValue = JSON.stringify(value)
  try {
    await AsyncStorage.setItem(key, serializedValue)
  } catch (e) {
    console.log(e);
  }
}

const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
      console.log(e);
  }
}

const clear = async () => {
  try {
    await AsyncStorage.multiRemove(Object.keys(storageKeys).filter(key => key !== 'default'))
  } catch (e) {
    console.log(e);
  }
}

export const localStorage = {
  getItem,
  setItem,
  removeItem,
  clear
}
