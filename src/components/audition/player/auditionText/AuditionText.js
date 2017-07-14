import React from 'react'
import {FlatList, StyleSheet, KeyboardAvoidingView} from 'react-native'
import AuditionTextRow from './AuditionTextRow'
import AuditionButtonsPane from './auditionButtonsPane/auditionButtonsPaneConnect'

type AuditionTextProps = {
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

const AuditionText = ({textWithMissings, currentMissingWordId, currentMissingWordAnswer}: AuditionTextProps) => (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <FlatList
      style={{flex: 1}}
      data={textWithMissings}
      keyExtractor={(item, index) => index}
      extraData={`${currentMissingWordId}${currentMissingWordAnswer}`}
      renderItem={({item}) => <AuditionTextRow textRow={item} currentMissingWordId={currentMissingWordId}/>}
    />
    <AuditionButtonsPane/>
  </KeyboardAvoidingView>
)

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
