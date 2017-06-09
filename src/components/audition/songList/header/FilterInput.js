import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../../constants/styleVariables'

const FilterInput = ({filter, filterOnChange, style, autoFocus, refFunc}) => (
  <TextInput
    value={filter}
    onChangeText={filterOnChange}
    style={[styles.searchField, ...style]}
    placeholder='Search...'
    placeholderTextColor={colors.secondFade}
    ref={refFunc}
  />
)

const styles = StyleSheet.create({
  searchField: {
    backgroundColor: colors.first,
    borderRadius: 5,
    color: colors.second,
    fontSize: fonts.navBarTitleSize,
    paddingVertical: 0,
    paddingHorizontal: layout.spacer,
    height: 28
  }
})

export default FilterInput
