---
layout: post
title: Corners, Edges, and the Boundary
date: 2016-04-05
category:
    - Software Engineering
tags:
    - software
    - engineering
    - programming
---

I've recently gotten more interested in software engineering, despite having
taken a course on it previously. As an aspiring computational biologist, I find
myself writing more code. So naturally, software engineering concepts pop up.

<!--break-->

Not long ago, I had a conversation with a friend and we brought up the term
"edge cases." In another setting, I saw someone talk about "corner cases." A
part of me assumed they were the same but curiousity got to me.

Researching a little more, I found a similar term of "boundary cases." All
three terms (edge, corner, and boundary cases) play on the analogy of a room.

# Edge Cases

The edge cases are cases whereby there is one variable or condition tested on
the extreme ends of possible values. Using a hardware example for simplicity, a
speaker with a volume range from 0 to 100 has edge cases at 0 and 100.

# Boundary Cases

Similar to edge cases are boundary cases. Here we look at the area around the
edges. Sticking with our speaker analogy with volume range from 0 to 100,
possible boundary cases could test the speaker at volume levels 99, 100, and
101.

# Corner Cases

Lastly, corner cases are where multiple "edges" (conditions) are involved in
testing. In our speaker analogy, a corner case could be testing volume extremes
(like in an edge case) but at the same time test the edge of, say, bass levels.

# Summary

These three cases (edge, corner, and boundary) are different ways to think
about how to test your product (software or hardware). Especially in software,
unit tests can be used to test these different kind of cases. Now I know these
nuanced terms exist and I can now think about them when writing my own unit
tests.
