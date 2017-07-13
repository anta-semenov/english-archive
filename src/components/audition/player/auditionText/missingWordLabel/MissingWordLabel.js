import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../../../constants/styleVariables'

const MissingWordLabel = ({missingWordData, selectMissingWord}) => {
  const {answer, checked, correct, word} = missingWordData
  const labelStyle = {
    //width: word.length * fonts.inputCharWidth + layout.spacer * 2,
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

MissingWordLabel.propTypes = {

}

const styles = StyleSheet.create({
  label: {
    backgroundColor: colors.firstLight,
    borderRadius: layout.spacer / 2,
    position: 'relative',
    fontSize: fonts.auditionTextSize,
    textAlign: 'center',
    marginHorizontal: layout.spacer,
    paddingHorizontal: layout.spacer
  }
})

export default MissingWordLabel
