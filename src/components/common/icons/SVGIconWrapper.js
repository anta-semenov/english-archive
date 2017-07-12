import React from 'react'
import {TouchableOpacity} from 'react-native'
import Svg from 'react-native-svg'

class SVGIconWrapper extends React.PureComponent {
  render() {
    const {onPress, children, style, viewBox} = this.props
    return(
      <TouchableOpacity onPress={onPress}>
        <Svg style={style} viewBox={viewBox}>
          {children}
        </Svg>
      </TouchableOpacity>
    )
  }
}

export default SVGIconWrapper
