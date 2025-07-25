---
title: Remove duplicate lines in Vim
publishDate: 2022-01-25
description: Learn how to remove duplicate lines in Vim using the uniq command to clean up your text files efficiently.
tags: [vim]
relatedPosts: ["reverse-sort-lines-in-vim", "pretty-print-json-in-neovimvim-using-jq", "treat-words-with-dash-as-a-word-in-vim"]
---

To remove duplicate lines in Vim you can pipe a selection from the current buffer into `uniq`:

```
foo
bar
bar
baz
```

Select all lines you want to dedup (linewise) and type `:!uniq`.

The buffer will be updated with the unique values (don't forget to save!).

![](/images/demo.gif)