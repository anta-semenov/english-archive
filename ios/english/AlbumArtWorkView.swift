//
//  AlbumArtWorkView.swift
//  english
//
//  Created by Anton on 04/06/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import UIKit
import MediaPlayer

@objc(AlbumArtWorkView)
class AlbumArtWorkView: UIImageView {
  var _size: Int = 57
  var _mediaItemId: String = ""
  var _artwork: MPMediaItemArtwork?
  
  var mediaItemId: String {
    get {
      return self._mediaItemId
    }
    set(newMediaItemId) {
      self._mediaItemId = newMediaItemId
      let predicate = MPMediaPropertyPredicate.init(value: UInt64(newMediaItemId), forProperty: MPMediaItemPropertyPersistentID)
      let query = MPMediaQuery(filterPredicates: [predicate])
      if (query.items == nil || query.items!.count == 0) {
        self._artwork = nil
        self.image = UIImage(named: "EmptyArtwork")
        return
      }
      
      let mediaItem = query.items![0]
      
      if let artwork = mediaItem.artwork {
        self._artwork = artwork
        self.image = artwork.image(at: CGSize(width: self.size, height: self.size))
      } else {
        self._artwork = nil
        self.image = UIImage(named: "EmptyArtwork")
      }
    }
  }
  
  var size: Int {
    get {
      return self._size
    }
    set(newSize) {
      if (newSize == self._size || self._artwork == nil) {
        return
      }
        
      self._size = newSize
      self.image = self._artwork!.image(at: CGSize(width: newSize, height: newSize))
      
    }
  }
  
  init() {
    super.init(image: UIImage(named: "EmptyArtwork"))
    
    self.layer.cornerRadius = 4
    self.layer.masksToBounds = true
    self.clipsToBounds = true
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

}
