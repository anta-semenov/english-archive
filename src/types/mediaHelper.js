export type AudioItem = {
  id: string,
  artist: string,
  album: string,
  title: string,
  assetUrl: string,
  lyrics: string
}

export type AudioItemCollection = {
  artist: string,
  items: AudioItem[]
}

export type MediaHelperType = {
  getUserSongs: () => Promise<AudioItemCollection[]>,
  playSong: (assetUrl: string) => void,
  pauseSong: () => void,
  resumeSong: () => void,
  stopSong: () => void,
  repeatSong: (interval: number) => void,
  getMediaLibraryLastModified: () => Promise<Date>
}
