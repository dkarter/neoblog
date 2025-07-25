---
publishDate: 2019-08-23
title: Pretty-Print JSON in NeoVim/Vim using jq
tags: [vim]
description: Pretty-print JSON in NeoVim/Vim using jq command line utility for processing and formatting JSON data.
---

[I've written here before about how to pretty-print JSON in Vim](https://til.hashrocket.com/posts/5b4ce2484e-pretty-print-jsonhtml-in-vim) but since then I have found an even easier method using `jq`.

[jq](https://github.com/stedolan/jq) is an amazing command line utility for processing, querying and formatting JSON. I use it all the time when I get a response from an API request and I want to extract information or simply to pretty-print it with colors. All you have to do is pipe the `curl` results into `jq`:

```bash
curl https://til.hashrocket.com/api/developer_posts.json?username=doriankarter | jq
```

![image](/images/9xqeccN.png)

You can also use `jq` inside of NeoVim to pretty print a JSON string, right in your buffer using this command:

```
:%!jq
```

![demo](/images/DrdAbWV.gif)