import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native'
import {AlbumArtwork} from '../../common'
import {colors, fonts, layout} from '../../../constants/styleVariables'

const SongItem = ({data: {artist, title, album, id}, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <AlbumArtwork mediaItemId={id} style={styles.artwork}/>
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
    flexDirection: 'row'
  },
  artwork: {
    marginRight: layout.spacer,
    width: 50,
    height: 50
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  title: {
    fontSize: fonts.listItemTitleSize,
    color: colors.second,
    marginVertical: 8
  },
  subtitle: {
    fontSize: fonts.listItemSubtitleSize,
    fontStyle: 'italic',
    color: colors.second,
    opacity: 0.8,
    marginBottom: 8
  }
})

export default SongItem
