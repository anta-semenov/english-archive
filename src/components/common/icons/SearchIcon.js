import React from 'react'
import {Path} from 'react-native-svg'
import SVGIconWrapper from './SVGIconWrapper'
import {colors} from '../../../constants/styleVariables'

interface Props {
  onPress: () => void,
  style: object | number
}

const SearchIcon = ({onPress, style}: Props) => (
  <SVGIconWrapper
    style={[{width: 20, height: 20}, style]}
    viewBox='0 0 24 24'
    onPress={onPress}
  >
    <Path
      fill={colors.second}
      d='M21.706 20.294l-4.531-4.531c1.144-1.45 1.825-3.281 1.825-5.262 0-4.688-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5c0 4.688 3.813 8.5 8.5 8.5 1.981 0 3.813-0.681 5.256-1.825l4.531 4.531c0.194 0.194 0.45 0.294 0.706 0.294s0.513-0.1 0.706-0.294c0.4-0.387 0.4-1.025 0.006-1.413zM4 10.5c0-3.581 2.919-6.5 6.5-6.5s6.5 2.919 6.5 6.5c0 1.775-0.712 3.381-1.869 4.556-0.012 0.012-0.025 0.025-0.037 0.038s-0.025 0.025-0.038 0.038c-1.175 1.156-2.781 1.869-4.556 1.869-3.581 0-6.5-2.919-6.5-6.5z'
    />
  </SVGIconWrapper>
)

export default SearchIcon
