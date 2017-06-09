import React from 'react'
import {StyleSheet, LayoutAnimation, View, Keyboard} from 'react-native'
import FilterInput from './FilterInput'
import Title from './Title'
import {layout} from '../../../../constants/styleVariables'

class Header extends React.PureComponent {
  componentWillReceiveProps({mode}) {
    if (mode !== this.props.mode) {
      LayoutAnimation.linear()

      if (mode !== 'search') {
        Keyboard.dismiss()
      } else if (this.filter) {
        this.filter.focus()
      }
    }
  }

  render() {
    const {setParams, isSearch, filter, filterOnChange} = this.props
    const title = <Title setParams={setParams} isSearch={isSearch} style={styles.titleComponents}/>

    return(
      <View style={styles.titleContainer}>
        {
          isSearch &&
          title
        }
        <FilterInput
          setParams={setParams}
          filter={filter}
          filterOnChange={filterOnChange}
          style={[styles.titleComponents, {opacity: isSearch ? 1 : 0}]}
          refFunc={component => this.filter = component}
        />
        {
          !isSearch &&
          title
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleComponents: {
    position: 'absolute',
    bottom: layout.spacer,
    left: 0,
    right: 0,
  },
  titleContainer: {
    flex: 1,
    width: '100%'
  }
})

export default Header
