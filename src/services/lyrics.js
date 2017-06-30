//@flow

export const getLyrics = (author: string, songName: string): string => {
  return ''
}

export const getTextWithMissings = (sourceText: string) => {
  const missingWords = {}
  let missingWordId = 0

  const textWithMissings = sourceText.split('\n').map(lyricsString => {
    if (lyricsString.length < 4 || ((Math.random() * 100) % 10) >= 4) {
      return lyricsString
    } else {
      const words = lyricsString.split(' ').filter(word => word.length > 3)

      const missWordIndex = Math.trunc(Math.random() * 1000) % words.length
      const missingWord = words[missWordIndex]
      missingWords[missingWordId] = {
        id: missingWordId,
        word: missingWord,
        answered: false,
        correctWrong: undefined
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
