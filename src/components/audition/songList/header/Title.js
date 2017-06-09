import React from 'react'
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native'
import {SearchIcon} from '../../../common'
import {colors, fonts} from '../../../../constants/styleVariables'

const Title = ({setParams, isSearch, style}) => (
  <TouchableWithoutFeedback onPress={() => setParams({mode: 'search'})}>
    <View
      style={[style, styles.chooseSong, {opacity: !isSearch ? 1 : 0}]}
    >
      <SearchIcon/>
      <Text style={styles.title}> Choose song...</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  title: {
    color: colors.second,
    fontSize: fonts.navBarTitleSize,
    fontWeight: fonts.navBarTitleWeight
  },
  chooseSong: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Title
