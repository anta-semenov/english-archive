import React from 'react'
import {ListView, StyleSheet, View, Modal, StatusBar} from 'react-native'
import SongItem from './SongItem'
import SongSectionHeader from './SongSectionHeader'
import AuditionPLayer from '../player/playerConnect'
import {colors} from '../../../constants/styleVariables'

class SongList extends React.PureComponent {
  state = {
    playerIsOpen: false,
    ds: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
  }

  closePlayer = () => {
    this.setState({playerIsOpen: false})
  }

  onPress = song => {
    this.props.startAudition(song)
    this.setState({playerIsOpen: true})
  }

  render() {
    const {ds, playerIsOpen} = this.state
    const {data} = this.props

    StatusBar.setHidden(playerIsOpen, true)

    return (
      <View style={styles.container}>
        <ListView
          dataSource={ds.cloneWithRowsAndSections(data)}
          renderRow={rowData => (
            <SongItem data={rowData} onPress={() => this.onPress(rowData)}/>
          )}
          renderSectionHeader={sectionData => <SongSectionHeader data={sectionData}/>}
          style={styles.container}
        />
        <Modal
          visible={playerIsOpen}
          animationType='slide'
          transparent={true}
        >
          <AuditionPLayer closePlayer={this.closePlayer}/>
        </Modal>
      </View>
    )
  }
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
