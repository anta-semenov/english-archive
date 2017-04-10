import React from 'react'
import {ListView, StyleSheet} from 'react-native'
import SongItem from './SongItem'
import {colors} from '../../../constants/styleVariables'

const SongList = ({data, onPress}) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
  })

  return (
    <ListView
      dataSource={ds.cloneWithRowsAndSections(data)}
      renderRow={rowData => (
        <SongItem data={rowData} onPress={() => onPress(rowData)}/>
      )}
      style={styles.container}
    />
  )
}

SongList.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.first,
    flex: 1
  }
})

export default SongList
