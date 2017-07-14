import React from 'react'
import {StyleSheet, View} from 'react-native'
import {colors, fonts, layout} from '../../../../constants/styleVariables'

interface Props {
  wordLength: number,
  children: any
}

const MissingWordContainer = ({wordLength, children}: Props) => {
  const width = wordLength * fonts.inputCharWidth + layout.halfSpacer * 2
  return (
    <View style={[styles.container, {width}]}>
      {children}
    </View>
  )
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
  }
})

export default MissingWordContainer
