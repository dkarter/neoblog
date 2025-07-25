---
title: Get `ping` linux command on docker
publishDate: 2019-04-18
tags: [devops]
description: Learn how to install the ping utility on Docker containers using the iputils-ping package for network debugging.
relatedPosts: [
  "get-the-linux-ip-command-line-utility-on-docker",
  "clean-stopped-containers-dangling-images-docker",
]
---

The ping utility is super useful for debugging network issues on docker, but it's package name is not as intuitive as `ping`.

To get it on your docker (for `slim` based environments) type:

```
apt-get install iputils-ping
```
