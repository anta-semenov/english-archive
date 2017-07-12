import React from 'react'
import {Path, Text} from 'react-native-svg'
import {SVGIconWrapper} from '../../common/icons'
import {colors} from '../../../constants/styleVariables'

const RepeatIcon = ({onPress, repeatInterval, style}) => (
  <SVGIconWrapper
    onPress={onPress}
    style={[{width: 40, height: 40}, style]}
    viewBox='-150 -150 300 300'
  >
    <Text fill={colors.second} fontSize='190' x='-10' y='-140' textAnchor='middle'>
      {repeatInterval}
    </Text>

    <Path
      d='M-1.9287e-06,-126.503 C69.8124,-126.503 126.63,-69.685 126.63,0.127397 C126.63,69.9398 69.8124,126.503 -1.9287e-06,126.503 C-69.8124,126.503 -126.376,69.9398 -126.376,0.127397'
      strokeWidth={12}
      stroke={colors.third}
      fillOpacity={0}
    />
    <Path
      d='M89.5163,-89.5691 C138.896,-40.1889 138.896,40.1889 89.5163,89.5691 C40.1361,138.949 -40.0616,138.769 -89.4417,89.3889 C-138.822,40.0087 -138.822,-40.0087 -89.4417,-89.3889'
      strokeWidth={12}
      stroke={colors.third}
      fillOpacity={0}
    />
    <Path
      d='M-38.2081,-114.449 L4.40086,-100.469 C2.4217,-121.444 -0.969826,-131.815 -7.37011,-149.612 L-38.2081,-114.449 Z'
      fill={colors.third}
    />
  </SVGIconWrapper>
)

RepeatIcon.propTypes = {
  onPress: React.PropTypes.func
}

export default RepeatIcon
