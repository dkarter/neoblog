---
title: "Install node modules in subdir without a CD"
description: "Use npm --prefix to install node modules in subdirs without cd, perfect for Dockerfiles and automation."
publishDate: 2019-02-01
tags: ["javascript", "npm", "workflow", "docker"]
isDraft: false
relatedPosts: ["using-yarn-global-w-node-through-asdf-mac"]
---

So yea you don't need a friend to send you a CD-ROM anymore to install node modules. You can use the World Wide Web! Pretty exciting.

On a more serious note, if your front-end is stored in a sub directory of your project, for example:

```bash
❯ tree -d -L 2
.
├── assets
|   ├── package.json
|   └── package-lock.json
└── app
```

Normally you would `cd` into assets, run `npm i`, and `cd` back out to the project root so you can go back to doing important things:

```bash
cd assets
npm i
cd -
```

Or you can push and pop, cause you're kinda smart

```bash
pushd assets && npm i && popd
```

Or if you're a really cool kid you'd use a sub-shell

```bash
(cd assets && npm i)
```

But wait! There's another option - use the `prefix` CLI option in NPM!

```bash
npm i --prefix assets
```

It works really well for those long Dockerfile `RUN` statements.
