import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import {AlbumArtwork} from '../../common'
import {colors, fonts, layout} from '../../../constants/styleVariables'

const artworkSize = fonts.listItemTitleSize + 2 * fonts.listItemSubtitleSize + 2 * layout.spacer

const SongItem = ({data: {artist, title, album, id}, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <AlbumArtwork mediaItemId={id} style={styles.artwork} size={artworkSize}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
        <Text style={styles.subtitle}>{artist}</Text>
        <Text style={styles.subtitle}>{album}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

SongItem.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.first,
    paddingHorizontal: layout.spacer,
    borderBottomWidth: 1,
    borderBottomColor: colors.firstLight,
    flex: 1,
    flexDirection: 'row',
    marginTop: layout.spacer
  },
  artwork: {
    width: artworkSize,
    height: artworkSize,
    backgroundColor: colors.first
  },
  infoContainer: {
    marginLeft: layout.spacer,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  title: {
    fontSize: fonts.listItemTitleSize,
    color: colors.second,
    marginBottom: layout.spacer
  },
  subtitle: {
    fontSize: fonts.listItemSubtitleSize,
    fontStyle: 'italic',
    color: colors.second,
    opacity: 0.8,
    marginBottom: layout.spacer
  }
})

export default SongItem
