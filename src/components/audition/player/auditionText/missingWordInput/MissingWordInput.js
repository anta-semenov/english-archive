import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../../../constants/styleVariables'

const MissingWordInput = ({missingWordData, onInputChange, autoCapitalaize}: Props) => {
  const {word, answer, checked, correct} = missingWordData
  const inputStyle = {
    //width: word.length * fonts.inputCharWidth + layout.spacer * 2,
    color: !checked ? colors.second : correct ? colors.right : colors.wrong,
    fontWeight: !checked ? 'bold' : 'normal'
  }

  return (
    <TextInput
      value={answer}
      onChangeText={onInputChange}
      style={[styles.input, inputStyle]}
      autoFocus
      autoCapitalize={autoCapitalaize ? 'sentences' : 'none'}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.firstLight,
    borderRadius: layout.spacer / 4,
    fontSize: fonts.auditionTextSize,
    textAlign: 'center',
    position: 'relative',
    marginHorizontal: layout.spacer,
    paddingHorizontal: layout.spacer
  }
})

export default MissingWordInput
