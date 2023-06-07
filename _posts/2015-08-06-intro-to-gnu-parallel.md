---
layout: post
title: Introduction to GNU Parallel
description: Learn what GNU Parallel is and how it is useful for parallel processing
category: linux
---

GNU `parallel` is a shell tool that allows you to execute jobs in parallel on one
or more computers.

<!--break-->

Say we are working on a single computer with four CPU cores and want to run
thirty-two jobs. Allotting jobs, you may divide the jobs evenly prior to running
the job.

![Alt Dividing jobs by number of cores][before]

With GNU `parallel`, it will in real-time split up the jobs to the cores that
finish with smaller jobs.

![Alt Automatic spawn of new jobs as old ones finish][after]

This provides an easy way to test/run multiple parameters on a single script
instead of using a `for` loop.

Here's a [link](http://www.gnu.org/software/parallel/) to learn more and
download the software for a wide variety of Linux distros and Mac OS.

Images shown above were taken from a Biostars [forum post][biostars parallel]
by its developer [Ole Tange][ole].

I'll be writing a short tutorial on how to install and use GNU `parallel` in a
future post.

[before]: /assets/gnu-parallel-before.png
[after]: /assets/gnu-parallel-after.png
[biostars parallel]: https://www.biostars.org/p/63816/
[ole]: http://ole.tange.dk/
