---
title: Show escaped bash color codes in less #linux
publishDate: 2018-06-11
tags: [command-line]
description: Display colored output from ls and commands when piping to less using -r flag to parse escape codes.
relatedPosts: ["pipe-all-output-from-a-command-stderr-stdout", "use-pgrep-and-xargs-to-kill-processes-zsh-bash", "difference-between-output-of-two-commands-linux"]
---

My ls command colors directories and files according to their type and permissions:

![ls with color](/images/yvrvekW.gif)

But when the window is too small to fit the content I pipe the result into `less`:

![less broken](/images/kfs0Mr9.gif)

Which cannot correctly parse the escape code from ls and turn them into color. To fix that add `-r` to the less command:

![solution](/images/EiPGO4q.gif)


Notes:
> My `l` alias is `gls -F -G --color --group-directories-first -lah` (`gls` is GNU ls)

> You can `alias less=less -r` if you want this to be the default behavior for less.