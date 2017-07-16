//@flow
import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {colors, fonts, layout} from '../../../../constants/styleVariables'

type FilterInputProps = {
  filter: number,
  filterOnChange: (value: string) => void,
  style: Array<number>,
  refFunc: (React.DOM) => void,
}

const FilterInput = ({filter, filterOnChange, style, refFunc}: FilterInputProps) => (
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
