import React from 'react'
import {StyleSheet} from 'react-native'
import {colors} from '../../../../constants/styleVariables'

const SongListHeader = (Header, CancelButton) => ({navigation, screenProps}) => {
  const {state: {params = {}}, setParams} = navigation
  const isSearch = params.mode === 'search'

  return ({
    headerTitle: <Header setParams={setParams} isSearch={isSearch}/>,
    headerRight: (isSearch ?
      <CancelButton setParams={setParams}/> :
      undefined
    ),
    headerStyle: styles.header
  })
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.firstLight
  }
})

export default SongListHeader
