import React from 'react'
import {Path} from 'react-native-svg'
import SVGIconWrapper from './SVGIconWrapper'
import {colors} from '../../../constants/styleVariables'

const CancelIcon = ({onPress, style}) => (
  <SVGIconWrapper
    onPress={onPress}
    style={[{width: 20, height: 20}, style]}
    viewBox='-150 -150 300 300'
  >
    <Path
      d='M77.021,-61.3611 L61.4885,-76.8936 L0.127395,-15.5325 L-61.2337,-76.8936 L-76.7662,-61.3611 L-15.4051,0 L-76.7662,61.3611 L-61.2337,76.8936 L0.127395,15.5325 L61.4885,76.8936 L77.021,61.3611 L15.6599,0 Z'
      fill={colors.second}
      strokeWidth='7.36142'
      stroke={colors.second}
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

CancelIcon.propTypes = {
  onPress: React.PropTypes.func
}

export default CancelIcon
