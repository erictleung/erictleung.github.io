---
layout: post
title: How to create a custom 404 page on Jekyll
description: Learn how to create a custom 404 page on your Jekyll site
categories: []
tags: [jekyll, 404]
---

While on [Google Search Console](https://search.google.com) for this site, I
found this error.

> Submitted URL seems to be a Soft 404

I know I have a 404 page because I made it fun to have a message referencing
Winnie-the-Pooh saying, "Oh bother!" However, in making this site, I forgot one
piece that makes this an official 404 page and I'll outline how to change that
below.

According to
[GitHub's documentation on GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site),
not only do you have to create a file named `404.md` or `404.html`, it needs
the following in the YAML front matter.

```
---
permalink: /404.html
---
```

This should officially designate this page as the 404 page rather than a page
that coincidentally has the same URL.

After adding this, my original 404 page was automatically removed from
[my sitemap page](https://erictleung.com/sitemap.xml).
