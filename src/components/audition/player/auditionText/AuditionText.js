import React from 'react'
import {FlatList, StyleSheet, KeyboardAvoidingView} from 'react-native'
import AuditionTextRow from './AuditionTextRow'
import AuditionButtonsPane from './auditionButtonsPane/auditionButtonsPaneConnect'
import {layout} from '../../../../constants/styleVariables'

interface Props {
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

//let flatList

class AuditionText extends React.Component<{}, Props, {}> {
  scrollToItem = (index: number) => {
    if (this.flatList) {
      this.flatList.scrollToIndex({
        animated: true,
        index,
        viewOffset: layout.missingWordScrollOffset
      })
    }
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
            />
          )}
          ref={ref => {this.flatList = ref}}
        />
        <AuditionButtonsPane/>
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
