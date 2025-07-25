---
title: "Get the linux `ip` command line utility on docker"
description: "How to install the linux ip command line utility on slim Docker containers for network debugging."
publishDate: 2019-04-18
tags: ["devops", "docker", "networking", "linux"]
isDraft: false
relatedPosts: ["get-ping-linux-command-on-docker", "no-ifconfig-on-linux", "how-does-dns-work"]
---

Linux has a network utility called `ip` which can be very useful when debugging networking issues inside a docker machine.

If you type `ip` inside your docker container and you get "Command not found", don't fret.

On `slim` based machines simply run:

```
apt-get install iproute
```