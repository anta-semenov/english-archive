export const MediaHelper = {
  getUserSongs: () => new Promise(resolve => {
    resolve([{
      artist: 'Artist 1',
      items: [
        {
          id: '1',
          artist: 'Artist 1',
          album: 'Album 1',
          title: 'Song 1',
          assetUrl: '123',
          lyrics: `I've made up my mind,
Don't need to think it over
If I'm wrong, I am right
Don't need to look no further,
This ain't lust
I know this is love
But, if I tell the world
I'll never say enough
'cause it was not said to you
And that's exactly what I need to do
If I end up with you

[Chorus]
Should I give up,
Or should I just keep chasin' pavements?
Even if it leads nowhere
Or would it be a waste
Even if I knew my place
Should I leave it there
Should I give up,
Or should I just keep chasin' pavements
Even if it leads nowhere

I build myself up
And fly around in circles
Waitin' as my heart drops
And my back begins to tingle
Finally, could this be it

[Chorus]
Or should I give up
Or should I just keep chasin' pavements
Even if it leads nowhere
Or would it be a waste
Even if I knew my place
Should I leave it there

Should I give up
Or should I just keep chasin' pavements
Even if it leads nowhere
Or would it be a waste
Even if I knew my place should I leave it there
Should I give up
Or should I just keep on chasin' pavements
Should I just keep on chasin' pavements
Ohh oh

[Chorus x2]`
        },
        {
          id: '2',
          artist: 'Artist 1',
          album: 'Album 1',
          title: 'Song 1',
          assetUrl: '123',
          lyrics: ''
        },
        {
          id: '3',
          artist: 'The Beatles',
          album: 'Album 1',
          title: 'Help!',
          assetUrl: '123',
          lyrics: ''
        },
        {
          id: '4',
          artist: 'John Legend',
          album: 'Album 1',
          title: 'Save Room',
          assetUrl: '123',
          lyrics: ''
        },
        {
          id: '5',
          artist: 'Beyonce',
          album: 'Album 1',
          title: 'Crazy In love (feat. Jay-Z)',
          assetUrl: '123',
          lyrics: ''
        }
      ]
    }])
  }),
  playSong: () => {},
  pauseSong: () => {},
  resumeSong: () => {},
  repeatSong: () => {},
  stopSong: () => {},
  getMediaLibraryLastModified: () => new Promise(resolve => {
    resolve(Math.random())
  })
}
