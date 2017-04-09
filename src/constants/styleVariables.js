import {Platform} from 'react-native'
import Color from 'color'

const navy = '#0d5095'
const white = '#fffef5'
const red = '#cd3030'

export const colors = {
  navy,
  white,
  red,
  first: navy,
  firstLight: Color(navy).lighten(0.3).hsl().string(),
  second: white,
  third: red
}

export const fonts = {
  ...Platform.select({
    ios: {
      listItemTitleSize: 17,
      listItemSubtitleSize: 12
    },
    android: {
      listItemTitleSize: 15,
      listItemSubtitleSize: 12
    }
  })
}
