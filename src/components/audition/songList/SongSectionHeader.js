import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../constants/styleVariables'
import type {AudioItem} from '../../../types'

interface Props {
  data: AudioItem[]
}

const SongSectionHeader = ({data}: Props) => {
  let title = ''

  if (data[0] && data[1] ) {
    title = data[0]. artist === data[1].artist ? data[0].artist : data[0].album
  } else if (data[0]) {
    title = data[0].artist
  }

  return (
    <Text style={styles.header}>
      {title || ''}
    </Text>
  )
}

const styles = StyleSheet.create({
  header: {
    color: colors.second,
    backgroundColor: colors.firstLight,
    paddingHorizontal: layout.spacer,
    paddingVertical: layout.spacer / 2,
    fontSize: fonts.listItemTitleSize,
    opacity: 0.95
  }
})

export default SongSectionHeader
