import {AsyncStorage} from 'react-native'

const getItem = async key => {
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

const setItem = async (key, value) => {
  const serializedValue = JSON.stringify(value)
  try {
    await AsyncStorage.setItem(key, serializedValue)
  } catch (e) {
      console.log(e);
  }
}

const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
      console.log(e);
  }
}

export const localStorage = {
  getItem,
  setItem,
  removeItem
}
