import React from 'react'
import {Path} from 'react-native-svg'
import {SVGIconWrapper} from '../../common/icons'
import {colors} from '../../../constants/styleVariables'

const PauseIcon = ({onPress, style}) => (
  <SVGIconWrapper
    onPress={onPress}
    style={[{width: 40, height: 40}, style]}
    viewBox='-150 -150 300 300'
  >
    <Path
      fill={colors.second}
      d='M-23.1742,76.8936 L-53.8253,76.8936 L-53.8253,-76.8936 L-23.1742,-76.8936 L-23.1742,76.8936 Z'
    />
    <Path
      fill={colors.second}
      d='M53.08,76.8936 L22.4289,76.8936 L22.4289,-76.8936 L53.08,-76.8936 L53.08,76.8936 Z'
    />

    <Path
      d='M-1.9287e-06,-126.503 C69.8124,-126.503 126.63,-69.685 126.63,0.127397 C126.63,69.9398 69.8124,126.503 -1.9287e-06,126.503 C-69.8124,126.503 -126.376,69.9398 -126.376,0.127397'
      strokeWidth={12}
      stroke={colors.third}
      fillOpacity={0}
    />
    <Path
      d='M126.67,-0.127436 C126.67,69.7066 69.834,126.542 -4.15318e-05,126.542 C-69.8341,126.542 -126.415,69.7066 -126.415,-0.127436 C-126.415,-69.9615 -69.8341,-126.542 -4.15318e-05,-126.542'
      strokeWidth={12}
      stroke={colors.third}
      fillOpacity={0}
    />
  </SVGIconWrapper>
)

PauseIcon.propTypes = {
  onPress: React.PropTypes.func
}

export default PauseIcon
