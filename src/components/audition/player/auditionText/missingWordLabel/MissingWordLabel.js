import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {colors, fonts} from '../../../../../constants/styleVariables'
import type {MissingWordType} from '../../../../../services/lyrics'

interface Props {
  missingWordData: MissingWordType,
  selectMissingWord: () => void
}

const MissingWordLabel = ({missingWordData, selectMissingWord}: Props) => {
  const {answer, checked, correct, word} = missingWordData
  const labelStyle = {
    color: !checked ? colors.second : correct ? colors.right : colors.wrong
  }

  return (
    <Text
      onPress={selectMissingWord}
      style={[styles.label, labelStyle]}
    >
      {checked && answer ? answer : '?'.repeat(word.length)}
    </Text>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: fonts.auditionTextSize,
    textAlign: 'center',
    width: '100%'
  }
})

export default MissingWordLabel
