---
title: "Vim: Peek horizontally without moving the cursor"
description: Learn how to scroll horizontally in Vim without moving the cursor using zs and ze mappings for better code navigation
tags: [vim]
publishDate: 2018-06-11
relatedPosts: ["reverse-sort-lines-in-vim", "remove-duplicate-lines-in-vim", "treat-words-with-dash-as-a-word-in-vim"]
---

Some people like wordwrapping in Vim. Personally I find it annoying for code because it can destroy the meaning of the code in the context that it was formatted in by the original author, making it hard to understand where one line begins and ends. 

Turning wordwrap off though, can put you in a situation where you have a line of text slightly longer than the screen can show, and you may want to scroll a bit to the right/left for reference but not move your cursor and lose your position with `^` or `$`.

Vim allows you to do that with `zs` and `ze` mappings.

DEMO
![demo](/images/S4xRBaO.gif)

Learn more with `:h zs` or `:h ze`.