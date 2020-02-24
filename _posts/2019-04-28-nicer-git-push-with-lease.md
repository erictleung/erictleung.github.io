---
layout: post
title: Nicer git push with lease
categories: [programming]
tags: [git]
---

I ran into this note of `git push --force` randomly.

Typically,
this command is very rude,
especially when collaborating with others and you haven't checked whether
anyone else has committed to the remote shared repository.

This can occur when the commits you've made do not account for commits made by
another person.

If you were to `git push --force` after rebasing,
then the other person's commits would be deleted.

Using `git push --force-with-lease`,
git will check whether the rest of your branch history is consistent with the
remote you're pushing to.
If not, it will prompt you to pull in those new changes.
[Atlassian](https://blog.developer.atlassian.com/force-with-lease/)
has an excellent example code through,
which has an example of Alice and Bob committing to the same remote and helped
me understand this feature[^gitadd].

Other great explanations can be found
[here](https://thoughtbot.com/blog/git-push-force-with-lease)
and
[here](https://stackoverflow.com/a/53042745/).

[^gitadd]: Random tidbit. This `--force-with-lease` was added in commit 
    <https://github.com/git/git/commit/28f5d176110d2ed768a0a49159993c7a02d8cb15>

## Things to share

### Interactive rebase

Speaking of rebase from above,
I've used this usually in a command line way,
where I just type it out and be done with it.

However,
I forgot there is an interactive way of this,
similar to `git add -i` to add interactively.

```sh
git rebase -i HEAD~4
```

can be used to reword commits (press <kbd>r</kbd> in the next screen),
among other things.

More:
<https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history>
