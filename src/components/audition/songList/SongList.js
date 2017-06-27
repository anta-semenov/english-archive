import React from 'react'
import {ListView, StyleSheet, View, Modal, StatusBar} from 'react-native'
import SongItem from './SongItem'
import SongSectionHeader from './SongSectionHeader'
import AuditionPLayer from '../player/playerConnect'
import {colors} from '../../../constants/styleVariables'

class SongList extends React.PureComponent {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })

    this.state = {
      playerIsOpen: false,
      ds,
      data: ds.cloneWithRowsAndSections(props.data)
    }
  }

  componentWillReceiveProps({data}) {
    if (data !== this.props.data) {
      if (this.updateDataId) {
        clearTimeout(this.updateDataId)
      }

      const stateData = this.state.ds.cloneWithRowsAndSections(data)

      this.updateDataId = setTimeout(
        () => this.setState({data: stateData}),
        70
      )
    }
  }

  closePlayer = () => {
    this.setState({playerIsOpen: false})
  }

  onPress = song => {
    this.props.startAudition(song)
    this.setState({playerIsOpen: true})
  }

  render() {
    const {playerIsOpen, data} = this.state

    StatusBar.setHidden(playerIsOpen, 'fade')

    return (
      <View style={styles.container}>
        <ListView
          dataSource={data}
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
