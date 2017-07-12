import React from 'react'
import {FlatList, StyleSheet, KeyboardAvoidingView, View, Text} from 'react-native'
import AuditionTextRow from './AuditionTextRow'
import {layout} from '../../../../constants/styleVariables'

type AuditionTextProps = {
  textWithMissings: string[],
  currentMissingWordId: number,
  currentMissingWordAnswer: string
}

const AuditionText = ({textWithMissings, currentMissingWordId, currentMissingWordAnswer}: AuditionTextProps) => (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={textWithMissings}
        keyExtractor={(item, index) => index}
        extraData={`${currentMissingWordId}${currentMissingWordAnswer}`}
        renderItem={({item}) => <AuditionTextRow textRow={item} currentMissingWordId={currentMissingWordId}/>}
      />
    </View>
    <Text style={{height: 56, fontSize: 17}}>text on the bottom</Text>
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
    paddingHorizontal: layout.spacer
  }
})

export default AuditionText
