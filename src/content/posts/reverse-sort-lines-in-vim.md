---
publishDate: 2018-11-03
title: Reverse sort lines in Vim
tags: [vim]
description: Learn how to reverse sort lines in Vim using Linux's tail command for descending order sorting.
---

Vim provides `sort` command for ordering lines in an ascending order, but what if you want to sort the lines in a reverse order?

Linux's `tail` to the rescue!

First select the lines to be reversed in visual mode with `V` (big V) then execute this Linux command from Vim's command prompt:

```
:'<,'>!tail -r
```

![demo](/images/140zFZP.gif)