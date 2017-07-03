import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import SongTextRow from './SongTextRow'

type SongTextProps = {
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

const SongText = ({textWithMissings, currentMissingWordId, currentMissingWordAnswer}: SongTextProps) => (
  <FlatList
    style={styles.container}
    data={textWithMissings}
    extraData={`${currentMissingWordId}${currentMissingWordAnswer}`}
    renderItem={({item}) => <SongTextRow row={item} currentMissingWordId={currentMissingWordId}/>}
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SongText
