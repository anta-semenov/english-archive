import React from 'react'
import {StyleSheet, TextInput, Button, Text, } from 'react-native'
import {colors, fonts} from '../../../constants/styleVariables'

export const FilterInput = ({filter, filterOnChange}) => (
  <TextInput
    value={filter}
    onChangeText={filterOnChange}
    style={styles.searchField}
    placeholder='Search...'
    placeholderTextColor={colors.secondFade}
  />
)

export const SongListHeader = FilterComponent => ({
  header: ({state: {params = {}}, setParams}) => {
    const isSearch = params.mode === 'search'

    return ({
      style: styles.header,
      right: (
        <Button
          color={colors.second}
          title={isSearch ? 'Cancel' : 'Search'}
          onPress={() => setParams({mode: isSearch ? 'none' : 'search'})}
        />
      ),
      title: (
        isSearch ?
        <FilterComponent/> :
        <Text style={styles.title}>Choose song</Text>
      )
    })
  }
})

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.firstLight
  },
  searchField: {
    backgroundColor: colors.first,
    borderRadius: 5,
    color: colors.second,
    fontSize: fonts.navBarTitleSize,
    paddingVertical: 0,
    paddingHorizontal: 8,
    height: 28
  },
  title: {
    color: colors.second,
    fontSize: fonts.navBarTitleSize,
    fontWeight: fonts.navBarTitleWeight
  }
})
