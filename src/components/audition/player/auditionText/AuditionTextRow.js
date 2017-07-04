import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MissingWordLabel from './missingWordLabel/missingWordLabelConnect'
import MissingWordInput from './missingWordInput/missingWordInputConnect'
import {fonts, colors} from '../../../../constants/styleVariables'

interface AuditionTextRowProps {
  textRow: string,
  currentMissingWordId: number
}

class AuditionTextRow extends React.Component<AuditionTextRowProps> {
  constructor(props: AuditionTextRowProps) {
    super(props)

    let elements: string[] = []
    let rowMissingWordId = -1

    const {textRow} = props
    if (/#\d*/.test(textRow)) {
      elements = /(.*)(?=#)(#\d*)(.*)/.exec(textRow).slice(1)
      rowMissingWordId = +/#(\d*)/.exec(elements[1])[1]
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
    const {currentMissingWordId} = this.props
    const missingWordIsActive = currentMissingWordId == rowMissingWordId

    return(
      <View>
        {elements.map(element => {
          if (/#\d*/.test(element)) {
            return (
              missingWordIsActive ?
              <MissingWordInput/> :
              <MissingWordLabel missingWordId={rowMissingWordId}/>
            )
          } else {
            return <Text style={styles.text}>{element}</Text>
          }
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  text: {
    fontSize: fonts.auditionTextSize,
    color: colors.second
  }
})

export default AuditionTextRow
