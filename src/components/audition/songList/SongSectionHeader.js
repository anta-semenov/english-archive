import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../constants/styleVariables'

const SongSectionHeader = ({data}) => {
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

SongSectionHeader.propTypes = {

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
