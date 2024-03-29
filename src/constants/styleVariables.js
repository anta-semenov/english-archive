//@flow
import {Platform} from 'react-native'
import Color from 'color'

const navy: string = '#0a4888'
const white: string = '#fffef5'
const red: string = '#cd3030'

export const colors = {
  navy,
  white,
  red,
  first: navy,
  firstLight: Color(navy).lighten(0.15).rgb().string(),
  firstDark: Color(navy).darken(0.15).hsl().string(),
  firstLightFade: Color(navy).lighten(0.15).fade(0.5).hsl().string(),
  second: white,
  secondFade: Color(white).fade(0.3).hsl().string(),
  third: red,
  right: '#30cd90',
  wrong: red
}

interface Fonts {
  listItemTitleSize: number,
  listItemSubtitleSize: number,
  buttonSize: number,
  navBarTitleSize: number,
  navBarTitleWeight: string,
  auditionTextSize: number,
  inputCharWidth: number
}

export const fonts: Fonts = {
  ...Platform.select({
    ios: {
      listItemTitleSize: 17,
      listItemSubtitleSize: 12,
      buttonSize: 16,
      navBarTitleSize: 17,
      navBarTitleWeight: '600',
      auditionTextSize: 17,
      inputCharWidth: 12
    },
    android: {
      listItemTitleSize: 15,
      listItemSubtitleSize: 12,
      buttonSize: 15,
      navBarTitleSize: 18,
      navBarTitleWeight: '500',
      auditionTextSize: 15,
      inputCharWidth: 12
    }
  })
}

interface Layout {
  spacer: number,
  halfSpacer: number,
  borderRadius: number,
  auditionButtonsHeight: number,
  missingWordHeight: number,
  keyboardHeight: number,
  playerControlsHeight: number,
  missingWordScrollOffset: number
}

export const layout: Layout = {
  ...Platform.select({
    ios: {
      spacer: 8,
      halfSpacer: 4,
      borderRadius: 4,
      auditionButtonsHeight: 36,
      missingWordHeight: 28.5,
      keyboardHeight: 290,
      playerControlsHeight: 56,
      missingWordScrollOffset: 90
    },
    android: {
      spacer: 16,
      halfSpacer: 8,
      borderRadius: 0,
      auditionButtonsHeight: 54,
      missingWordHeight: 28.5,
      keyboardHeight: 260,
      playerControlsHeight: 56,
      missingWordScrollOffset: 90
    }
  })
}
