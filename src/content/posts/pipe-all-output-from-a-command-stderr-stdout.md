---
title: "Pipe all output from a command (stderr & stdout)"
description: "Learn how to pipe both stderr and stdout from bash commands using the |& syntax, and how to pipe only stderr output."
publishDate: 2018-10-05T19:24:24Z
tags: ["command-line"]
isDraft: false
isFeatured: false
canonicalUrl: "https://til.hashrocket.com/posts/gcwwbqfmb1-pipe-all-output-from-a-command-stderr-stdout"
relatedPosts: [
  "use-a-proxy-on-curlwget-commands",
  "whats-my-public-ip-automation-linux-terminal",
]
---

When you write a bash/zsh script relying on pipes normally you will not be able to pipe through text from the stderr output with a normal pipe.

For example, `curl -v` prints some information about the request, including it's headers and status into stderr.

If we simply try to pipe the output of `curl -v` into `less` we will not see the verbose header and request info:

```bash
curl -v https://hashrocket.com | less
```

Output:

```
<html lang='en-US'>
<meta charset='UTF-8'>
<title>Ruby on Rails, Elixir, React, mobile design and development | Hashrocket</title>
...
```

But if we want the stderr output as well we can use the `|&` syntax:

```bash
curl -v https://hashrocket.com |& less
```

Output:

```
* Rebuilt URL to: https://hashrocket.com/
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
...
* Connected to hashrocket.com (52.55.191.55) port 443 (#0)
...
<html lang='en-US'>
<meta charset='UTF-8'>
...
```

---

### 🍒 Bonus:

We can also pipe through ONLY the stderr:

```bash
curl -v https://hashrocket.com |1>& less
```

Output (will not contain the html response):

```
* Rebuilt URL to: https://hashrocket.com/
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
...
```

h/t Thomas Allen
