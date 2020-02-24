---
layout: post
title: Delete lines with a pattern in vim
categories: [vim]
tags: [text editing, vim]
---

In vim, I know you can search and replace text with
`:s/FINDTHIS/REPLACE/g`
to replace all occurrences in a line after pressing <kbd>Ctrl-v</kbd>.

But then, I recently wanted to *delete* all lines containing a certain pattern
and wondered if vim could do this. Turns out. It can.

Below is the pattern to delete lines with a certain pattern.

```
:g/searchterm/d
```

The `/d` indicates we're deleting lines and leading `g` stands for "global" in
order to affect the entire buffer.

The use case I wanted was to delete lines that started with the number zero.
We can also use these commands[^ex] to do more complex search and delete.

```
:g/^0/d
```

You can read more
[here](https://vim.fandom.com/wiki/Delete_all_lines_containing_a_pattern)
or by pressing `:help :g` (global changes) and `:help :d` (delete lines).

[^ex]: Apparently, these are called Ex commands. Maybe I'll cover these in
    another post.
