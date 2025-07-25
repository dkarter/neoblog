---
title: "Use a proxy on curl/wget commands"
description: "Configure proxy settings for curl and wget commands when global proxy settings don't apply to CLI utilities."
publishDate: 2018-04-17
tags: ["command-line", "curl", "wget", "proxy", "debugging"]
isDraft: false
isFeatured: false
relatedPosts: [
  "whats-my-public-ip-automation-linux-terminal",
  "pipe-all-output-from-a-command-stderr-stdout",
]
---

Using a proxy can be a good way to debug http issues. Unfortunately setting the proxy on macOS globally does not apply to all command line utilities.

On Curl for example you can set the proxy using the `--proxy` flag:

```bash
curl http://example.com --proxy 127.0.0.1:8080
```

Or by adding the following to your `~/.curlrc` configuration file for a more persistent setting:

```
proxy = 127.0.0.1:8080
```

A similar thing can be done with the `wget` utility by editing the `~/.wgetrc` and adding:

```
http_proxy = http://127.0.0.1:8080
```
