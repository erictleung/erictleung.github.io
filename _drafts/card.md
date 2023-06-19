---
layout: post
title: Business card through your website
description: How I created a business card using curl
categories: []
tags: []
---


I found someone on Twitter on year had a similar curl statement in their bio.


```bash
curl -sL http://erictleung.com/card
```

This output to your terminal and text-based business card. I thought it was
nerdy and fun and decided to replicate it myself.

The code for this card can be found at
[my website GitHub repo](https://github.com/erictleung/erictleung.github.io/blob/59e064e5d6c43b9cfc1a4cd103ab8b841205b922/card.html).

When you open up the card, you'll most likely be met with unfamiliar text. This
text is
[ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors).

To make changes, you can refer to this GitHub gist to help translate what needs
to be changed:

https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124

At the time of this writing, this manual guess-and-check method is the best way
for me to update this card.
