import React from 'react'
import {StyleSheet, TextInput, Button, Text, LayoutAnimation, View, Keyboard,
  TouchableWithoutFeedback} from 'react-native'
import {TextInputState} from 'react-native/lib/TextInputState'
import {SearchIcon} from '../../common'
import {colors, fonts, layout} from '../../../constants/styleVariables'

export const FilterInput = ({filter, filterOnChange, style, autoFocus, refFunc}) => (
  <TextInput
    value={filter}
    onChangeText={filterOnChange}
    style={[styles.searchField, styles.titleComponents, style]}
    placeholder='Search...'
    placeholderTextColor={colors.secondFade}
    ref={refFunc}
  />
)

export const CancelButton = ({filterOnCancel, setParams}) => (
  <Button
    onPress={() => {
      setParams({mode: 'none'})
      filterOnCancel()
    }}
    title='Cancel'
    color={colors.second}/>
)

const ChooseSongTitle = ({setParams, isSearch}) => (
  <TouchableWithoutFeedback onPress={() => setParams({mode: 'search'})}>
    <View
      style={[styles.titleComponents, styles.chooseSong, {opacity: !isSearch ? 1 : 0}]}
    >
      <SearchIcon onPress={() => setParams({mode: 'search'})}/>
      <Text style={styles.title}> Choose song...</Text>
    </View>
  </TouchableWithoutFeedback>
)

export class HeaderTitle extends React.PureComponent {
  componentWillReceiveProps({mode}) {
    if (mode !== this.props.mode) {
      LayoutAnimation.easeInEaseOut()

      if (mode !== 'search') {
        Keyboard.dismiss()
      } else if (this.filter) {
        this.filter.focus()
      }
    }
  }

  render() {
    const {setParams, mode, filter, filterOnChange} = this.props
    const isSearch = mode === 'search'

    return(
      <View style={styles.titleContainer}>
        {
          isSearch &&
          <ChooseSongTitle setParams={setParams} isSearch={isSearch}/>
        }
        <FilterInput setParams={setParams} filter={filter} filterOnChange={filterOnChange} style={{opacity: isSearch ? 1 : 0}} refFunc={component => this.filter = component}/>
        {
          !isSearch &&
          <ChooseSongTitle setParams={setParams} isSearch={isSearch}/>
        }
      </View>
    )
  }
}

export const SongListHeader = (HeaderTitle, CancelButton) => ({
  header: ({state: {params = {}}, setParams}) => {
    const isSearch = params.mode === 'search'

    return ({
      style: styles.header,
      right: (isSearch ?
        <CancelButton setParams={setParams}/> :
        undefined
      ),
      title: (
        <HeaderTitle setParams={setParams} mode={params.mode}/>
      ),
      left: undefined
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
    paddingHorizontal: layout.spacer,
    height: 28
  },
  title: {
    color: colors.second,
    fontSize: fonts.navBarTitleSize,
    fontWeight: fonts.navBarTitleWeight
  },
  titleComponents: {
    position: 'absolute',
    bottom: layout.spacer,
    left: 0,
    right: 0,
  },
  titleContainer: {
    flex: 1,
    width: '100%'
  },
  chooseSong: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
