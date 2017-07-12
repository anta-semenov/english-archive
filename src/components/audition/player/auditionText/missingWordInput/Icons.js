import React from 'react'
import {StyleSheet} from 'react-native'
import {Path} from 'react-native-svg'
import {SVGIconWrapper} from '../../../../common/icons'
import {colors} from '../../../../../constants/styleVariables'

const icon = (path) => ({onPress, style}) => (
  <SVGIconWrapper
    onPress={onPress}
    viewBox='0 0 24 24'
    style={[styles.icon, style]}
  >
    <Path
      d={path}
      fill={colors.secondFade}
    />
  </SVGIconWrapper>
)

export const CancelButton = icon('M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z')

export const CheckButton = icon('M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563-1.406 1.406zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z')

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    opacity: 0.95,
    backgroundColor: 'transparent',
    zIndex: 5
  }
})
