import React from 'react'
import {FlatList, StyleSheet, KeyboardAvoidingView, Dimensions} from 'react-native'
import AuditionTextRow from './AuditionTextRow'
import AuditionButtonsPane from './auditionButtonsPane/auditionButtonsPaneConnect'
import {layout} from '../../../../constants/styleVariables'

const screenHeight = Dimensions.get('window').height

interface Props {
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

//let flatList

class AuditionText extends React.Component<{}, Props, {}> {
  getYmap = {}
  idToIndexMap = {}

  scrollToItem = async (index: number) => {
    const getY = this.getYmap[index]
    if (this.flatList && typeof getY === 'function') {
      const loacationY = await getY()
      if (loacationY > (screenHeight - layout.keyboardHeight)) {
        this.flatList.scrollToIndex({
          animated: true,
          index,
          viewOffset: layout.missingWordScrollOffset
        })
      }
    }
  }

  scrollToId = (id: number) => {
    this.scrollToItem(this.idToIndexMap[id])
  }

  registerGetY = (index, getY) => {
    this.getYmap[index] = getY
  }

  registerMissingWordIdToIndex = (id, index) => {
    this.idToIndexMap[id] = index
  }

  render() {
    const {textWithMissings, currentMissingWordId, currentMissingWordAnswer} = this.props

    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={textWithMissings}
          keyExtractor={(item, index) => index}
          extraData={`${currentMissingWordId}${currentMissingWordAnswer}`}
          renderItem={({item, index}) => (
            <AuditionTextRow
              textRow={item}
              currentMissingWordId={currentMissingWordId}
              scrollToItem={() => this.scrollToItem(index)}
              registerGetY={getY => this.registerGetY(index, getY)}
              registerMissingWordIdToIndex={id => this.registerMissingWordIdToIndex(id, index)}
            />
          )}
          ref={ref => {this.flatList = ref}}
        />
        <AuditionButtonsPane scrollToId={this.scrollToId}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 56,
  }
})

export default AuditionText
