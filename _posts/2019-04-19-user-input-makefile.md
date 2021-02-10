---
layout: post
title: Getting user input within Makefile
categories: [automation]
tags: [makefile, programming, automation, bash]
---

If you want to get user input from within a Makefile,
ensure you run the `read` command in one line.
It turns out that each line is run in its own subshell.
So if you read in user input, ensure you have semicolons and backslashes to
ensure commands are run in the same subshell.

This is important because subshells don't share local variables.

Here is a minimal example.

```makefile
do :
    @echo "What is your age?: "; \
    read AGE; \
    echo "Your age is ", $$(AGE)
```

Source: [https://stackoverflow.com/a/12170504](https://stackoverflow.com/a/12170504)
