---
title: "Add visual fold markers to Vim's gutter"
description: Display visual fold markers in Vim's gutter using foldcolumn for better code folding visualization
tags: [vim]
publishDate: 2020-01-06
---

TIL that you can display visual fold markers in Vim's gutter by setting the `foldcolumn`!

```vim
set foldcolumn=2
```

The number indicates how wide the gutter holding the fold marks should be.

Here it is in action:

![demo](/images/wUeDB7O.gif)

This also makes the folds openable via mouse, which may be useful for some folks.

For more info: `:h foldcolumn`