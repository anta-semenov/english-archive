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
  const textWithMissings = sourceText.replace(/u0085|u2028|u2029|\v|\f|\n\r|\r\n/gu, '\n').split(/\n|\r/).map(lyricsString => {
    if (!lyricsString) return '<empyString>'

    const words = lyricsString.split(' ').filter(word => word.length >= 3)

    if (words.length < 3 || ((Math.random() * 100) % 5) > 3) {
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

const azLyricsPreffix = 'http://azlyrics.com/lyrics/'
export const requestLyrics = async (artist: string, title: string): Promise<string> => {
  const azArtist = artist.toLowerCase().replace(/the|\s|'|"|\.|,|!|\?|-/g, '')
  const azTitle = title.toLowerCase().replace(/\s|'|"|\.|,|!|\?|-/g, '')
  const requestString = `${azLyricsPreffix}${azArtist}/${azTitle}.html`

  const request = await fetch(requestString)
  if (request.status === 200) {
    const rawHtml: string = await request.text()
    let text = rawHtml.split(/<!-- Usage of azlyrics\.com.*-->/)[1].split(/<\/div>/)[0]

    text = text.replace(/<br>/g, '\n').replace(/^\n/, '').replace(/<i>\[.*\]<\/i>/g, '').replace(/\n\n/g, '\n')
    return text
  } else if (request.status === 404) {
    const error = new Error(`Can't find lyrics for ${artist} ${title}`)
    throw error
  }
}
