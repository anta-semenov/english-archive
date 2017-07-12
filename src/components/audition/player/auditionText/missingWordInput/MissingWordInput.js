import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import {CancelButton, CheckButton} from './Icons'
import {colors, fonts, layout} from '../../../../../constants/styleVariables'

const MissingWordInput = ({missingWordData, onInputChange, checkMissingWord, unselectMissingWord, autoCapitalaize}: Props) => {
  const {word, answer, checked, correct} = missingWordData
  const inputStyle = {
    width: word.length * fonts.inputCharWidth + layout.spacer * 2,
    color: !checked ? colors.second : correct ? colors.right : colors.wrong,
    fontWeight: !checked ? 'bold' : 'normal'
  }

  return (
    <View style={styles.container}>
      <CancelButton onPress={unselectMissingWord}/>
      <TextInput
        value={answer}
        onChangeText={onInputChange}
        style={[styles.input, inputStyle]}
        autoFocus
        autoCapitalize={autoCapitalaize ? 'sentences' : 'none'}
      />
      <CheckButton onPress={checkMissingWord}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.firstLight,
    borderRadius: layout.spacer / 4,
    position: 'relative',
    marginHorizontal: layout.spacer,
    flexDirection: 'row'
  },
  textInput: {
    fontSize: fonts.auditionTextSize,
    textAlign: 'center',
    position: 'relative'
  },
  cancelButton: {
    position: 'absolute',
    top: '-100%',
    left: 0
  },
  checkButton: {
    position: 'absolute',
    top: 0,
    right: '-110%'
  }
})

export default MissingWordInput
