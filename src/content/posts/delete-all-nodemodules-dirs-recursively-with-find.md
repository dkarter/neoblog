---
title: Delete all node_modules dirs recursively with find
publishDate: 2018-04-21
tags: [command-line]
description: Save disk space by recursively deleting node_modules directories using find command for JavaScript cleanup.
relatedPosts: [
  "list-filenames-of-multiple-filetypes-in-project",
  "use-pgrep-and-xargs-to-kill-processes-zsh-bash",
]
---

If you have hundreds of past JavaScript projects sitting in your workspace folder, you probably also have hundreds of `node_modules` folders nested inside of them, and hundreds of thousands actual npm modules resting peacefully in those.

Often enough all you care about is the code that uses the modules and not the modules themselves, so to save yourself some precious laptop diskspace you can just delete all those folders! When you need them again cd into the project directory and run `yarn install` or `npm install`.

First let's do a dry run:

```bash
find . -name "node_modules" -type d -prune
```

and now that you checked the output of the above command you can delete all the nested `node_module` folders.

If you are still feeling paranoid (and you're on macOS) you can simply move those to the Trash:

```bash
find . -name "node_modules" -type d -prune -exec trash '{}' +
```

If you feel a little braver just unlatch the airlock and toss them into a black hole 🕳 using `rm -rf`

```bash
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```

I saved a whopping **80GB** with this technique 🤑. Hope you find it helpful.
