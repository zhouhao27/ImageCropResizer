/* ModusEcho.h */

#import <Cordova/CDV.h>

@interface ImageCropResizer : CDVPlugin

- (void)echo:(CDVInvokedUrlCommand*)command;
- (void)cropResize:(CDVInvokedUrlCommand*)command;

@end