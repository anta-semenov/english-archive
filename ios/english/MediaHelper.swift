//
//  MediaHelper.swift
//  english
//
//  Created by Anton on 02/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import AVFoundation
import MediaPlayer

@objc(MediaHelper)
class MediaHelper: NSObject {
  @objc func getUserSongs(_ resolver: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    let mediaQuery = MPMediaQuery.artists()
    mediaQuery.groupingType = MPMediaGrouping.albumArtist
    
    if mediaQuery.collections == nil {
      resolver([])
      return
    }
    
    let userSongs = mediaQuery.collections!.map({(collection: MPMediaItemCollection) -> NSDictionary in
      let artistCollection = NSMutableDictionary()
      
      artistCollection.setValue(collection.representativeItem, forKey: "artist")
      artistCollection.setValue(
        collection.items.map({(mediaItem: MPMediaItem) -> NSDictionary in
          let song = NSMutableDictionary()
          
          song.setValue(mediaItem.artist, forKey: "artist")
          song.setValue(mediaItem.albumTitle, forKey: "album")
          song.setValue(mediaItem.title, forKey: "title")
          song.setValue(mediaItem.assetURL, forKey: "assetUrl")
          song.setValue(mediaItem.lyrics, forKey: "lyrics")
          
          return song
        }),
        forKey: "items")
      
      return artistCollection
    })
    
    resolver(userSongs)
  
  }
  
  @objc func playSong(_ assetUrl: NSString) -> Void {
    
  }
}
