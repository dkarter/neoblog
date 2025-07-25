---
publishDate: 2018-08-05
title: Copy files with progress in terminal w/rsync
tags: [command-line]
description: Use rsync with progress indicators for large data transfers with visual feedback on speed and time.
relatedPosts: [
  "whats-my-public-ip-automation-linux-terminal",
  "use-pgrep-and-xargs-to-kill-processes-zsh-bash",
]
---

When you need to transfer a lot of files from one location to another it's sometimes useful to have some progress indication and maybe even a speed measure, or time remaining.

I recently had to transfer a few gigabytes of data from one computer to another. For this task I chose to use Rsync, since it is a command line utility that can preserve file metadata (permissions) and easily resume in case of an error.

Rsync ships with macOS by default, but if you want to get a more recent version, you can install it from homebrew.

There are two options for showing progress:

If you are transferring a few really big files you can use the `--progress` flag.

```bash
rsync -ah --progress source destination
```

This will list each file as it being transferred and show you the progress and speed in which the file is being transferred.

In my case I had a lot of small files so I chose to use `--info=progress2`.

```bash
rsync -ah --info=progress2 source destination
```

This will output something like this

```
2.26G  16%    6.13MB/s    0:05:51 (xfr#375313, to-chk=0/1165396)
```

Which represents the progress, speed and estimated time remaining for the entire transfer.
