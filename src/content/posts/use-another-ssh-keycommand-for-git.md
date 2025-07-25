---
title: "Use another SSH key/command for Git"
description: "Use different SSH key for Git commands with GIT_SSH_COMMAND environment variable and direnv."
publishDate: 2018-10-05
tags: ["git", "ssh", "command-line"]
isDraft: false
isFeatured: false
relatedPosts: ["never-use-git-branch-in-a-script-without-doing-this", "what-does-that-git-alias-do"]
---

If you need to use a different SSH key for a git command such as `git push` you can do so by setting the `GIT_SSH_COMMAND` environment variable like so:

```bash
GIT_SSH_COMMAND="ssh -i ~/.ssh/custom_key" git push
```

This can become a lot easier to use if you define that env var automatically when entering a directory by using [direnv](https://github.com/direnv/direnv).

h/t Thomas Allen