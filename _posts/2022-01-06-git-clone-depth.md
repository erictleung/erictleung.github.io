---
layout: post
title: Git shallow clone for faster version control
categories: [git]
tags: [git, performance, speed]
---

Contributing to open-source software is great fun. The feeling of being a part
of a larger community and adding to something larger than yourself. As a
consequence, you work on large projects with lots of version control history.

This post is a reminder to myself to use this `git clone` flag to make it
easier on my hard drive and make git work faster when doing day-to-day version
control commands.

The key flag is the `--depth` flag. According to the documentation, this flag
helps to

> Create a shallow clone with a history truncated to the specified number of
> commits.

The specified number of commits is an integer that comes after the `--depth`
flag.

For example, I worked on the
[freeCodeCamp main repository](https://github.com/freeCodeCamp/freeCodeCamp)
and it has twenty-nine thousand commits as of this writing. This is a lot.

So to clone this repository without so many of those commits that I won't need,
you can run this command.

```sh
git clone --depth 100 https://github.com/freeCodeCamp/freeCodeCamp.git
```

This will get only the last 100 commits from this repository. More on this flag
here
[https://book.git-scm.com/docs/git-clone](https://book.git-scm.com/docs/git-clone).
