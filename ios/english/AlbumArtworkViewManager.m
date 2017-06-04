//
//  AlbumArtworkViewManager.m
//  english
//
//  Created by Anton on 04/06/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import "english-Swift.h"

@interface AlbumArtWorkViewManager : RCTViewManager
@end

@implementation AlbumArtWorkViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(size, int)
RCT_EXPORT_VIEW_PROPERTY(mediaItemId, NSString)


- (UIView *)view {
  return [[AlbumArtWorkView alloc] init];
}

@end
