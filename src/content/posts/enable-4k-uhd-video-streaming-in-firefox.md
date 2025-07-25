---
publishDate: 2018-06-21
title: Enable 4k UHD video streaming in Firefox
tags: [workflow]
description: Enable 4k UHD video streaming in Firefox by enabling VP9 WebM codec support through about:config.
---

By default, Firefox does not support the VP9 WebM codec sites like YouTube use to deliver 4k quality video. If you visit a video that supports 4k you won't even see the option available under the Quality menu.

Test video: [https://www.youtube.com/watch?v=Bey4XXJAqS8](https://www.youtube.com/watch?v=Bey4XXJAqS8)

To enable it:

1. visit `about:config`
2. search for `webm`
3. double click `media.mediasource.webm.enabled`

![demo](/images/6WeMRJW.gif)

And now refresh YouTube 
![result](/images/ynFdxGr.gif)