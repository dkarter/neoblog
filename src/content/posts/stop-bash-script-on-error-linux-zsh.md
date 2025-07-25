---
title: "Stop #bash script on error #linux #zsh"
description: "Make bash scripts halt on error using set -e and set -o pipefail for robust shell scripting."
publishDate: 2017-11-16T18:15:36Z
tags: ["command-line"]
isDraft: false
isFeatured: false
canonicalUrl: "https://til.hashrocket.com/posts/cp1ovv8ovo-stop-bash-script-on-error-linux-zsh"
relatedPosts: [
  "pipe-all-output-from-a-command-stderr-stdout",
  "never-use-git-branch-in-a-script-without-doing-this",
  "use-pgrep-and-xargs-to-kill-processes-zsh-bash",
]
---

If you are writing a procedural bash script, you may want to stop execution if one of the steps errored out.

You can write error handling for each step, but that can get quite verbose and make your script hard to read, or you might even miss something.

Fortunately bash provides another option:

```bash
set -e
```

Simply place the above code at the top of your script and bash should halt the script in case any of them returns a non-true exit code.

Caveats: this will not work in all cases, for example it does not work for short circuited commands using `&&`/`||`.

If you want it to work when one of your operations in a pipe fails you will need to add the pipefail flag (not supported on some systems `set -o | grep pipefail` to check your system):

```bash
set -e -o pipefail
```

If you have a script that always returns a non true return code and that's fine you can override `set -e` for that command with:

```bash
set +e
your_command_goes_here
set -e
```

At this point I consider it a best practice to include this statement in every script I write.
