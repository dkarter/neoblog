---
title: Delete remote git branch - the declarative way
publishDate: 2019-01-18
tags: [git]
description: Delete remote git branches declaratively using --delete flag instead of cryptic colon syntax.
relatedPosts: ["never-use-git-branch-in-a-script-without-doing-this", "what-does-that-git-alias-do"]
---

Cleaning up after yourself is important, and not just in real life. Good _Git Hygiene™_ goes a long way.

One of the methods I like to clean up is deleting unused feature branches. I do that both locally and on the remote source control server (github/gitlab etc).

As is common with Git there are many ways to feed a cat. Some people use this:

```bash
git push origin :name-of-branch
```

I prefer the more declerative way, especially for potentially destructive operations such as deleting a remote branch:

```bash
git push origin --delete name-of-branch
```

Either way, keeping your remote branches trim makes for a happier development team!