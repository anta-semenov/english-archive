import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../../../constants/styleVariables'
import type {MissingWordType} from '../../../../../services/lyrics'

interface Props {
  missingWordData: MissingWordType,
  onInputChange: (value: string) => void,
  autoCapitalaize: boolean
}

const MissingWordInput = ({missingWordData, onInputChange, autoCapitalaize}: Props) => {
  const {answer, checked, correct} = missingWordData
  const inputStyle = {
    color: !checked ? colors.second : correct ? colors.right : colors.wrong
  }

  return (
    <TextInput
      value={answer}
      onChangeText={onInputChange}
      style={[styles.textInput, inputStyle]}
      autoFocus
      autoCapitalize={autoCapitalaize ? 'sentences' : 'none'}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    textAlign: 'center',
    fontSize: fonts.auditionTextSize,
    width: '100%'
  }
})

export default MissingWordInput
