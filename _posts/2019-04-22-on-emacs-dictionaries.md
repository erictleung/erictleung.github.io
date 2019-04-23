---
layout: post
title: On using dictionaries in Emacs
categories: [emacs]
tags: [emacs, dictionaries, spelling]
---

I use Emacs and I'll frequently want to spellcheck words I type out.
Occasionally, I'll use a word that doesn't typically exist in a dictionary
(e.g., someone's name or a scientific word).

In my Emacs configuration, I use
[flyspell](http://www-sop.inria.fr/members/Manuel.Serrano/flyspell/flyspell.html).
It is an on-the-fly spell checker and the program is uses to
[Aspell](http://aspell.net/) to spell check.
Another similar program that can be used is
[Ispell](https://www.cs.hmc.edu/~geoff/ispell.html)[^ispell].

[^ispell]: Aspell works better with English, while Ispell is more international; see [https://www.cs.hmc.edu/~geoff/ispell.html#aspell]().

To create your own personal dictionary,
create a file `.aspell.lang.pws`, where `lang` is a
[two or three letter](http://aspell.net/man-html/Supported.html#Supported)
language code.

This file starts with `personal_ws-1.1 lang num`, where `lang` is the language
code and num is the estimated number of words in your dictionary.

So it should look something like this:

```
personal_ws-1.1 en 2
microbiota
microbiome
```
