import React from 'react'
import {StyleSheet} from 'react-native'
import {colors} from '../../../../constants/styleVariables'

const SongListHeader = (Header, CancelButton) => ({
  header: ({state: {params = {}}, setParams}) => {
    const isSearch = params.mode === 'search'

    return ({
      style: styles.header,
      right: (isSearch ?
        <CancelButton setParams={setParams}/> :
        undefined
      ),
      title: (
        <Header setParams={setParams} isSearch={isSearch}/>
      )
    })
  }
})

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.firstLight
  }
})

export default SongListHeader
