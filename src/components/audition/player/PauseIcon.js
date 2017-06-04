import React from 'react'
import {TouchableOpacity} from 'react-native'
import Svg, {Path} from 'react-native-svg'
import {colors} from '../../../constants/styleVariables'

const PauseIcon = ({onPress, style}) => (
  <TouchableOpacity onPress={onPress}>
    <Svg style={[{width: 30, height: 30}, style]} viewBox='0 0 32 32'>
      <Path
        fill={colors.second}
        d="M10 10h4v12h-4zM18 10h4v12h-4z"
      />
      <Path
        fill={colors.third}
        d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"
      />
    </Svg>
  </TouchableOpacity>
)

PauseIcon.propTypes = {
  onPress: React.PropTypes.func
}

export default PauseIcon
