---
layout: post
title: Reflecting on exploratory versus explanatory data visualization
categories: [dataviz]
tags: [dataviz, eda, comparisons, infographic]
---

I still haven't created examples
[for the `#TidyTuesday` project](https://github.com/rfordatascience/tidytuesday).

But in looking at other submissions and comparing them with some of the
visualizations I was preparing to create, I had some real insight into the
difference between exploratory and explanatory data visualizations as I
reflected on why I liked certain examples more than others and my own.

[Exploratory data analysis](https://en.wikipedia.org/wiki/Exploratory_data_analysis),
as the name implies, is about exploring the data. These figures can be quite
complex and show a lot of data.

I noticed this
[faceted plot](https://github.com/charlie-gallagher/tidy-tuesday/blob/19ae39e9e0b3f9ba484c6a453fe1899e9b8ed2ee/art_collections/art_collection.png)
example. It is a nice faceted plot and cannot be understood with one look.
It took me some time to read the legend and scan back and forth across all the
years to understand its meaning.

This is what makes this a good exploratory plot. It invites the viewer to
explore and think about the work and data.

Although this is a _complex_ exploratory plot, I think it is an exemplar for an
exploratory plot, much like an infographic.

Here's another good exploratory plot showing a network of the 300 most common
transatlantic slave routes.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/TidyTuesday?src=hash&amp;ref_src=twsrc%5Etfw">#TidyTuesday</a> Week 25. <br>Network graph linking the 300 most common transatlantic slave routes. The routes are grouped according to random walks, highlighting some of the colonies of each nation. <a href="https://t.co/QzH1EdHc02">pic.twitter.com/QzH1EdHc02</a></p>&mdash; MissingNotAtRandom (@AtMissing) <a href="https://twitter.com/AtMissing/status/1273735843195297792?ref_src=twsrc%5Etfw">June 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

I really enjoyed this plot because of the various annotations scattered
throughout the visual. These enhance the plot's meaning and understanding.

On the other hand, there are explanatory plots.

These have more thought and purpose to
[what they wish to show](https://www.storytellingwithdata.com/blog/2014/04/exploratory-vs-explanatory-analysis).

For example, the linked plot below is comparing the number of paintings
acquired from a prolific artist, Joseph Mallord William Turner, versus everyone
else.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I went ultra-simple
for <a href="https://twitter.com/hashtag/TidyTuesday?src=hash&amp;ref_src=twsrc%5Etfw">#TidyTuesday</a>, but a new thing for me was using the {<a href="https://twitter.com/hashtag/glue?src=hash&amp;ref_src=twsrc%5Etfw">#glue</a>} 📦 which I love. Code on my GitHub <a href="https://t.co/eMRb3GP0G0">https://t.co/eMRb3GP0G0</a>. A visualisation about the Tate&#39;s favourite artist. <a href="https://t.co/EfzRddNAbm">pic.twitter.com/EfzRddNAbm</a></p>&mdash; Jack Davison (@JDavison_) <a href="https://twitter.com/JDavison_/status/1350038790392475649?ref_src=twsrc%5Etfw">January 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

These plots are typically not complex. The above plot is a standard histogram
you learn in middle or high school. However, it is very effective in telling
you a "story" or message.

To me, it shows

- how prolific an artist Joseph Mallord William Turner was, and
- how many paintings the Tate Art Museum has acquired.

These points are immediately clear.

I wrote this post because as I was creating my own visualizations for the
`#TidyTuesday` project, I noticed how I didn't feel as drawn to my examples as
much as these others I found.

I then reflected on what kind of plot I was making and what insights or
information I could learn from the plot. I realized I didn't have a clear
purpose in creating the plot other than to use a particular ggplot2 package,
[`ggalt`](https://www.r-bloggers.com/2016/04/ggplot2-exercising-with-ggalt-dumbbells/).

Although I may be overthinking it, this single exploration into the
`#TidyTuesday` project has reminded me of what makes a good visualization. I
hope to finally participate, share, and continue to learn from making more
visualizations.

Side note, a great resource on exploratory data analysis can be found using
[NIST's Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/eda/eda.htm).
