import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import AuditionTextRow from './AuditionTextRow'

type AuditionTextProps = {
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

const AuditionText = ({textWithMissings, currentMissingWordId, currentMissingWordAnswer}: AuditionTextProps) => (
  <FlatList
    style={styles.container}
    data={textWithMissings}
    extraData={`${currentMissingWordId}${currentMissingWordAnswer}`}
    renderItem={({item}) => <AuditionTextRow row={item} currentMissingWordId={currentMissingWordId}/>}
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AuditionText
