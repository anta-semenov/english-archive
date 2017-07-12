//@flow

export const getLyrics = (author: string, songName: string): string => {
  return ''
}

export type MissingWordType = {
  id: number,
  word: string,
  answer: string,
  answered: boolean,
  correct: boolean,
  checked: boolean
}

export const getTextWithMissings = (sourceText: string) => {
  const missingWords = {}
  let missingWordId = 0

  const textWithMissings = sourceText.split('\n').map(lyricsString => {
    if (!lyricsString) return '<empyString>'

    const words = lyricsString.split(' ').filter(word => word.length > 3)

    if (words.length < 3 || ((Math.random() * 100) % 10) >= 6) {
      return lyricsString
    } else {
      const missWordIndex = Math.trunc(Math.random() * 1000) % words.length
      const missingWord = words[missWordIndex]
      missingWords[missingWordId] = {
        id: missingWordId,
        word: missingWord,
        answered: false,
        correct: undefined
      }

      const newLyricsString = lyricsString.replace(missingWord, `#${missingWordId}`)

      missingWordId++

      return newLyricsString
    }
  })

  return ({
    textWithMissings,
    missingWords
  })
}
