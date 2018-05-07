import {Platform, NetInfo} from 'react-native'

export const isNetworkConnected = () => {
  if (Platform.OS === 'ios') {
    return new Promise(resolve => {
      const handleFirstConnectivityChangeIOS = isConnected => {
        NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChangeIOS)
        resolve(isConnected)
      }
      NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChangeIOS)
    })
  }

  return NetInfo.isConnected.fetch();
}
