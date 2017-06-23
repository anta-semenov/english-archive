//
//  MediaHelperBridge.m
//  english
//
//  Created by Anton on 02/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MediaHelper, NSObject)

RCT_EXTERN_METHOD(getUserSongs:(RCTPromiseResolveBlock *)resolve rejecter:(RCTPromiseRejectBlock *)reject)

RCT_EXTERN_METHOD(playSong:(NSString *)assetUrl)

RCT_EXTERN_METHOD(pauseSong)

RCT_EXTERN_METHOD(resumeSong)

RCT_EXTERN_METHOD(stopSong)

RCT_EXTERN_METHOD(repeatSong:(int) interval)

RCT_EXTERN_METHOD(getMediaLibraryLastModified:(RCTPromiseResolveBlock *)resolve rejecter:(RCTPromiseRejectBlock *)reject)

@end
