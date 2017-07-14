import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {fonts, colors, layout} from '../../../../constants/styleVariables'
import MissingWord from './missingWord/missingWordConnect'

interface AuditionTextRowProps {
  textRow: string,
  currentMissingWordId: number
}

interface State {
  elements: string[],
  rowMissingWordId: number
}

class AuditionTextRow extends React.Component<AuditionTextRowProps, State> {
  constructor(props: AuditionTextRowProps) {
    super(props)

    let elements: string[] = []
    let rowMissingWordId = -2

    const {textRow} = props
    if (/#\d*/.test(textRow)) {
      elements = /(.*)(?=#)(#\d*)(.*)/.exec(textRow).slice(1)
      rowMissingWordId = +/#(\d*)/.exec(elements[1])[1]
    } else if (textRow === '<empyString>') {
      elements.push('')
    } else {
      elements.push(textRow)
    }

    this.state = {
      elements,
      rowMissingWordId
    }
  }

  shouldComponentUpdate({currentMissingWordId}) {
    const {rowMissingWordId} = this.state
    const {currentMissingWordId: previousCurrentMissingWordId} = this.props

    if (currentMissingWordId == rowMissingWordId ||
        previousCurrentMissingWordId == rowMissingWordId) {
      return true
    }
    return false
  }

  render() {
    const {elements, rowMissingWordId} = this.state

    return(
      <View style={styles.rowContainer}>
        {elements.map((element, index, array) => {
          if (/#\d*/.test(element)) {
            return (
              <MissingWord
                key={index}
                autoCapitalize={index == 0 || !array[index - 1] || array[index - 1].endsWith('. ')}
                id={rowMissingWordId}
              />
            )
          } else {
            return <Text style={styles.text} key={index}>{element}</Text>
          }
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: layout.spacer,
    paddingVertical: layout.halfSpacer,
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.auditionTextSize,
    color: colors.secondFade,
    flex: 0
  }
})

export default AuditionTextRow
