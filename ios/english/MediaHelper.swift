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
  var _player: AVAudioPlayer?
  
  override init() {
    let session = AVAudioSession.sharedInstance()
    
    do {
      try session.setCategory(AVAudioSessionCategoryPlayback)
    } catch let error as NSError {
      print("\(error)")
    }
  }
  
  @objc func getUserSongs(_ resolver: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    let mediaQuery = MPMediaQuery.artists()
    mediaQuery.groupingType = MPMediaGrouping.albumArtist
    
    if mediaQuery.collections == nil {
      resolver([])
      return
    }
    
    var userSongs = [NSDictionary]()
    
    for collection in mediaQuery.collections! {
      let artistCollection = NSMutableDictionary()
      
      artistCollection.setValue(collection.representativeItem?.artist, forKey: "artist")
      artistCollection.setValue(
        collection.items.map({(mediaItem: MPMediaItem) -> NSDictionary in
          let song = NSMutableDictionary()
          
          song.setValue(mediaItem.artist, forKey: "artist")
          song.setValue(mediaItem.albumTitle, forKey: "album")
          song.setValue(mediaItem.title, forKey: "title")
          song.setValue(mediaItem.assetURL?.absoluteString, forKey: "assetUrl")
          song.setValue("\(mediaItem.persistentID)", forKey: "id")
          
          if mediaItem.lyrics != nil {
            song.setValue(mediaItem.lyrics, forKey: "lyrics")
          } else {
            let asset = AVAsset(url: mediaItem.assetURL!)
            song.setValue(asset.lyrics, forKey: "lyrics")
          }
          
          return song
        }),
        forKey: "items")
      
      userSongs.append(artistCollection)
    }

    resolver(userSongs)
  
  }
  
  @objc func playSong(_ assetUrl: String) -> Void {
    do {
      let url = URL(string: assetUrl)
      try _player = AVAudioPlayer(contentsOf: url!)
      _player!.prepareToPlay()
      _player!.play()
    } catch let error as NSError {
      print((error as NSError).localizedDescription)
    }
  }
  
  @objc func pauseSong() -> Void {
    _player?.pause()
  }
  
  @objc func resumeSong() -> Void {
    _player?.play()
  }
  
  @objc func stopSong() -> Void {
    _player?.stop()
  }
  
  @objc func repeatSong(_ interval: Int) -> Void {
    if _player == nil {
      return
    }
    
    _player!.pause()
    let repeatPosition = max(_player!.currentTime - Double(interval), 0)
    _player!.currentTime = repeatPosition
    _player!.play()
  }
  
  
}
