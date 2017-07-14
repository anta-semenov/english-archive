import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {fonts, colors, layout} from '../../../../constants/styleVariables'
import MissingWord from './missingWord/missingWordConnect'

interface Props {
  textRow: string,
  currentMissingWordId: number
}

type misingWordElement = {
  id: number,
  autoCapitalize: boolean
}

interface State {
  elements: Array<string | misingWordElement>,
  rowMissingWordIds: number[]
}

class AuditionTextRow extends React.Component<{}, Props, State> {
  constructor(props: Props) {
    super(props)

    const {textRow} = props

    const rowMissingWordIds: number[] = []
    const elements = textRow.split(' ').map((element, index, array) => {
      if (/#(\d*)/.test(element)) {
        const id = +/#(\d*)/.exec(element)[1]
        rowMissingWordIds.push(id)
        const autoCapitalize = index == 0 || array[index - 1].endsWith('. ')

        return ({id, autoCapitalize})
      } else {
        let result = element

        if (index !== (array.length - 1)) {
          result = `${result} `
        }

        if (index !== 0 && /#(\d*)/.test(array[index-1])) {
          result = ` ${result}`
        }

        if (element === '<empyString>') {
          result = ''
        }

        return result
      }
    })

    this.state = {
      elements,
      rowMissingWordIds
    }
  }

  shouldComponentUpdate({currentMissingWordId}: Props) {
    const {rowMissingWordIds} = this.state
    const {currentMissingWordId: previousCurrentMissingWordId} = this.props

    if (rowMissingWordIds.includes(currentMissingWordId) ||
        rowMissingWordIds.includes(previousCurrentMissingWordId)) {
      return true
    }
    return false
  }

  render() {
    const {elements} = this.state

    return(
      <View style={styles.rowContainer}>
        {elements.map((element, index) => {
          if (typeof element === 'string') {
            return <Text style={styles.text} key={index}>{element}</Text>
          } else {
            const {id, autoCapitalize} = element
            return (
              <MissingWord
                key={index}
                autoCapitalize={autoCapitalize}
                id={id}
              />
            )
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
