---
title: "Use pgrep and xargs to kill processes in zsh/bash"
description: "Efficiently find and kill processes using pgrep and xargs instead of copying PIDs from ps aux."
publishDate: 2020-01-21
tags: ["command-line", "bash", "zsh", "process-management"]
isDraft: false
isFeatured: false
---

Have you ever found yourself doing this:

```bash
ps aux | grep [b]eam
```

And then copying the pids one by one so you can pass them to `kill`?

There's a better way to return just the pids of the process you care about and not having to worry about `ps` finding your `grep` call (that's why I'm surrounding the `b` in `beam` with square brackets).

```bash
pgrep -f beam
```

This will return just the pids, one in each line (which is perfect for use with `xargs`)

Example output:

```
11632
11456
```

Use with `xargs` to `kill` (`-9` for extra brutality points):

```bash
pgrep -f beam | xargs kill -9
```