---
title: "What does that git alias do?"
description: "Use git help to quickly discover what your custom Git aliases do without opening your .gitconfig file."
publishDate: 2020-01-28
tags: ["git", "alias", "command-line"]
isDraft: false
isFeatured: false
relatedPosts: ["never-use-git-branch-in-a-script-without-doing-this", "delete-remote-git-branch-the-declarative-way", "jump-between-git-hunks-in-vim-with-vim-gitgutter"]
---

I have some git aliases in my [dotfiles](https://github.com/dkarter/dotfiles) and sometimes I use an alias for too long that I actually forget what it does under the hood.

I can open my `~/.gitconfig` file in nvim [(which I have an alias for)](https://github.com/dkarter/dotfiles/blob/5b6d394625eaa0f52b95192c8d453f73ee5fc271/aliases#L156) and search for the line that introduced the alias, but when pairing sometimes it's easier and faster to just use `git help` to get the definition of an alias:

```bash
git help doff
```

```
'doff' is aliased to 'reset HEAD^'
```