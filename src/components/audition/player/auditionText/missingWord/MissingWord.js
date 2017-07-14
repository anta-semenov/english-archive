import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import {colors, fonts, layout} from '../../../../../constants/styleVariables'
import type {MissingWordType} from '../../../../../services/lyrics'

interface Props {
  missingWordData: MissingWordType,
  input: boolean,
  autoCapitalaize: boolean,
  selectMissingWord: () => void,
  onInputChange: (value: string) => void,
}

class MissingWord extends React.PureComponent<{}, Props, {}> {
  render() {
    const {missingWordData, input, autoCapitalaize, selectMissingWord, onInputChange} = this.props
    const {answer, checked, correct, word} = missingWordData

    const textStyle = {
      color: !checked ? colors.second : correct ? colors.right : colors.wrong
    }

    const width = word.length * fonts.inputCharWidth + layout.halfSpacer * 2

    return(
      <View style={[styles.container, {width}]}>
        {
          input ?
          <TextInput
            value={answer}
            onChangeText={onInputChange}
            style={[styles.text, textStyle]}
            autoFocus
            autoCapitalize={autoCapitalaize ? 'sentences' : 'none'}
          /> :
          <Text
            onPress={selectMissingWord}
            style={[styles.text, textStyle]}
          >
            {checked && answer ? answer : '?'.repeat(word.length)}
          </Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.firstLight,
    borderRadius: layout.borderRadius,
    position: 'relative',
    //marginHorizontal: layout.spacer,
    paddingHorizontal: layout.halfSpacer,
    paddingVertical: layout.halfSpacer,
    height: layout.missingWordHeight
  },
  text: {
    fontSize: fonts.auditionTextSize,
    textAlign: 'center',
    width: '100%',
    flex: 1
  }
})

export default MissingWord
