import React from 'react'
import {Text, View, StyleSheet, LayoutAnimation} from 'react-native'
import {colors, layout, fonts} from '../../../../../constants/styleVariables'

interface Props {
  id: number,
  checkMissingWord: () => void,
  unselectMissingWord: () => void
}

class AuditionButtonsPane extends React.PureComponent<{}, Props, {}> {
  componentWillReceiveProps({id}: Props) {
    if (id == -1 || this.props.id == -1) {
      LayoutAnimation.linear()
    }
  }

  render() {
    const {checkMissingWord, unselectMissingWord, id} = this.props
    let opacity = 1
    let height = layout.auditionButtonsHeight

    if (id == -1) {
      opacity = 0
      height = 0
    }

    return(
      <View style={[styles.container, {opacity, height}]}>
        <Text style={[styles.button, styles.buttonLeft]} onPress={unselectMissingWord}>Cancel</Text>
        <Text style={[styles.button, styles.buttonRight]} onPress={checkMissingWord}>Check</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  button: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.secondFade,
    color: colors.first,
    fontSize: fonts.navBarTitleSize,
    textAlign: 'center',
    padding: layout.spacer
  },
  buttonRight: {
    marginLeft: 1
  },
  buttonLeft: {
    marginRight: 1
  }
})

export default AuditionButtonsPane
