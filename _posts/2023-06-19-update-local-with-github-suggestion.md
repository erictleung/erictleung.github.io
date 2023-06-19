---
layout: post
title: Updating your local branch after getting GitHub suggestions
categories: [github]
tags: [git]
---

GitHub has a useful feature to add code change suggestions right in the web UI.

This is great. But then what if you want to continue editing locally? Here is
some code to help you do that, starting from making the initial pull request.

```
git checkout -b new-branch

# ...Make changes

git add files-changed.txt
git commit -m "Changed files"
git push origin new-branch

# On GitHub some suggestions are made

git fetch

git checkout new-branch
git pull main new-branch
```
