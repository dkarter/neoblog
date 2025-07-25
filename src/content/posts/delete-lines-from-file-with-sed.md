---
title: Delete lines from file with sed
publishDate: 2019-05-03
tags: [command-line]
description: Delete specific lines from files using sed with regex, including in-place editing and backup options.
---

Imagine the following file:

> sed.test

```
hised
hellosed
goodbyesed
```

If you want to delete a line matching a regular expression (e.g. `hellosed`), you can use `d` at the end of your regular expression.

```bash
sed '/hellosed/d' sed.test
```

Output:


```
hised
goodbyesed
```

However the file did not change:


> `cat sed.test`

```
hised
hellosed
goodbyesed
```

To write the file in place use the `-i [suffix]` option. This argument allows you to specify the suffix of the backup file to be saved before committing your changes. For example:


```bash
sed -i '.bak' '/hellosed/d' sed.test
```

Now the file will be modified with our changes but we will also get a backup of the original file in   `sed.test.bak`.

If you like living on the edge 🛩, and don't want those pesky backup files littering your system, you can supply `-i` with an empty suffix, causing no backup file to be saved.

```bash
sed -i '' '/hellosed/d' sed.test
```