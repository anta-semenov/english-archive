import {Platform} from 'react-native'
import Color from 'color'

const navy = '#0a4888'
const white = '#fffef5'
const red = '#cd3030'

export const colors = {
  navy,
  white,
  red,
  first: navy,
  firstLight: Color(navy).lighten(0.15).hsl().string(),
  firstDark: Color(navy).darken(0.15).hsl().string(),
  second: white,
  secondFade: Color(white).fade(0.3).hsl().string(),
  third: red
}

export const fonts = {
  ...Platform.select({
    ios: {
      listItemTitleSize: 17,
      listItemSubtitleSize: 12,
      buttonSize: 16,
      navBarTitleSize: 17,
      navBarTitleWeight: '600'
    },
    android: {
      listItemTitleSize: 15,
      listItemSubtitleSize: 12,
      buttonSize: 15,
      navBarTitleSize: 18,
      navBarTitleWeight: '500'
    }
  })
}
