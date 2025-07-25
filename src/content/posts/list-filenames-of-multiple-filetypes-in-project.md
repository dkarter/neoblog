---
title: "List filenames of multiple filetypes in project"
slug: "list-filenames-of-multiple-filetypes-in-project"
description: "How to use Ag (The Silver Searcher) to list files of multiple types in your project while ignoring gitignored files."
publishDate: 2017-11-14
tags: ["command-line", "tools"]
isDraft: false
isFeatured: false
canonicalUrl: "https://til.hashrocket.com/posts/kxvmdlrzh2-list-filenames-of-multiple-filetypes-in-project"
relatedPosts: ["delete-all-nodemodules-dirs-recursively-with-find", "unraveling-homebrew-dependencies-a-handy-guide"]
---

Ag (aka [The Silver Searcher](https://github.com/ggreer/the_silver_searcher)) is an amazing piece of software. It allows you to define file types (like Ack) and comes prepackeged with some file types.

Using this feature you can list all files of a specific type in your project. For example say we want to list all Ruby and JavaScript files:

```bash
ag --ruby --js -l
```

Ag has the added benefit over Ack, that it ignores gitignored files, so you only get the files that matter (and not stuff from node_modules etc).

To see what filetypes Ag supports:

```bash
ag --list-file-types
```

The list is pretty extensive! Unlike Ack however, there is currently no way to add new file types or extend the list.