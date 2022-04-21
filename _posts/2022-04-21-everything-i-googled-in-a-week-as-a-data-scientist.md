---
layout: post
title: Everything I googled in a week as a professional data scientist
categories: []
tags: [engineering, work]
---

I ran across
[this blog post from a software
engineer](https://localghost.dev/blog/everything-i-googled-in-a-week-as-a-professional-software-engineer/)
who decided to document what they googled in a week of work.

Their goal was to dispel the idea that "if you have to google stuff you're not
a software engineer." I wanted to do something similar, but from the
perspective of a data scientist.

*Disclaimer*: although "data science" is such a broad field and my account
won't be representative of all data workers out there, I thought it would be
data point for us to have to understand what could go on in our day-to-day.
This week apparently was full of package development with
[{pkgdown}](https://pkgdown.r-lib.org/), plotting results with
[{ggplot2}](https://ggplot2.tidyverse.org/) and making small aesthetic changes,
and making a table with [{gt}](https://gt.rstudio.com/).

## Monday

`pkgdown Failed to parse example for topic` - Turned out some code in an
function example was invalid

`git ammend specific commit message` - Wanted to be more clear with a commit
message

`pkgdown Topics missing from index` - A function was missing from my references
page so I just put it back in the `_pkgdown.yml` file and all was good

`roxygen2 documentation` - Needed an overall page
[on roxygen2 syntax](https://roxygen2.r-lib.org/articles/rd-formatting.html)


## Tuesday

`gt add table header` - Found the official website and just took a look at
[the introduction page](https://gt.rstudio.com/articles/intro-creating-gt-tables.html)

`gt change header color` - Wanted to change the color, found `tab_options()`
and found
[the parameter `column_labels.background.color`](https://gt.rstudio.com/reference/tab_options.html)
to change the color

`forcats relevel factors` - To have more control on how a plot is created, I
need extra control on my factors

`forcats relevel by other variable` - Self-explanatory,
[this page](https://forcats.tidyverse.org/reference/fct_reorder.html)
was useful

`r get just file name of file path` - Stack Overflow to the rescue with
`basename()` and also `dirname()`
[here](https://stackoverflow.com/a/2548871/6873133)

`gt left align columns` - Eventually got me to find
[the `cols_align()` function](https://gt.rstudio.com/reference/cols_align.html)

`ggplot2 change order of legend` - Need to change order of the factor levels
with
[help here](https://www.geeksforgeeks.org/change-display-order-of-ggplot2-plot-legend-in-r/)

`ggplot2 change order of stacked bar` - Again,
[factor reorder](https://stackoverflow.com/a/33541763/6873133)

`r scales change axis to thousands` - This question was
[good enough](https://stackoverflow.com/q/56758733/6873133)
because it led me to a comment about `unit_format()`, which brings me to the
next search...

`r scales unit_format` - Which brings me to the official documentation page
and what I needed was
[the `unit` and `scale` parameters](https://scales.r-lib.org/reference/unit_format.html)

`r ggplot2 add numbers to bar plot` - Needed `geom_text()` and passing in
[a `label` aesthetic](https://stackoverflow.com/a/6645506/6873133)

`ggplot2 add two labels to bar plot` - I ended up back at
[my previous search](https://stackoverflow.com/a/6645506/6873133),
but figured because of the power of ggplot2, I can simply have two
`geom_text()` calls with two different aesthetic mappings, one to each kind of
label I wanted and adjust them accordingly to fix the plot


## Wednesday

`ggplot2 stacked bar` - this
[site helped](https://r-charts.com/part-whole/stacked-bar-chart-ggplot2/)

`ggplot2 legend on top` - Possible with `+ theme(legend.position = "top")`

`ggplot2 empty space` - I wanted to make an empty space between certain bars in
my bar plot, but I figured it might easier to make an empty space instead.
So...

`forcats add factor` - just
[the documentation page](https://forcats.tidyverse.org/reference/fct_expand.html)

`ggplot2 format x-axis labels` - a
[solid general resource](http://www.sthda.com/english/wiki/ggplot2-axis-ticks-a-guide-to-customize-tick-marks-and-labels)

`ggplot2 change ordering of legend` - I found
[this site](https://learnr.wordpress.com/2010/03/23/ggplot2-changing-the-default-order-of-legend-labels-and-stacking-of-data/)
, but the answer seems outdated because it doesn't work

`ggplot2 change labels with one function` - I kind of didn't search for this
one exactly, rather, I used my Twitter to find the answer that uses
[the `labs()` function](https://twitter.com/erictleung/status/1489060241933148160)

`ggplot2 color code geom_text` - You can simply pass in
[a color aesthetic and manually color it](https://stackoverflow.com/a/41544369/6873133)

`ggplot2 change number of rows in legend` - I can
[use `guides(colour = guide_legend(nrow = 1)`](https://stackoverflow.com/a/44060041/6873133)

`gghighlight` - Didn't end up using it, but still
[a useful package](https://cran.r-project.org/web/packages/gghighlight/vignettes/gghighlight.html)
to know about

`ggplot2 format y-axis` - The {scales} package is absolutely wonderful, but I
keep on forgetting which
[function to use](https://statisticsglobe.com/change-formatting-of-numbers-of-ggplot2-plot-axis-in-r)

`ggplot2 geom_col side by side bars` - I always forget
[the `position = "dodge"`](https://stackoverflow.com/a/25070645/6873133)

`ggplot2 match geom text with dodged bars` - With
[`position_dodge()` within `geom_text()`](https://stackoverflow.com/a/6017961/6873133)


## Thursday

`ggplot2 bar width` - Looks like a
[simple `width = X` in your `geom_bar()`](https://stackoverflow.com/a/32943101/6873133)

`ggplot2 scales label_number` - good documentation is
[the best](https://scales.r-lib.org/reference/number.html)

`ggplot2 change text size` - such
[a common
thing](https://statisticsglobe.com/change-font-size-of-ggplot2-plot-in-r-axis-text-main-title-legend)
I'd imagine this would be easier. I was in a time crunch so maybe there's a
better way for another time

`?geom_vline` - I remembered this is to generate a vertical line, but I have
forgotten the parameters, so I ran this one right in RStudio

`ggplot2 add textbox` - Ah with
[the `annotate()` function](https://stackoverflow.com/a/44012702/6873133)


## Friday

`ggplot2 better spacing of geom_text stacked bar plot` - This brought me to
learn about
[the `lineheight` paremter](https://stackoverflow.com/a/51134651/6873133),
but ultimately, I wanted the text *not to overlap*, and after looking at the
documentation, `geom_text` has a built-in parameter `check_overlap` for just
this.

`ggrepl for stacked bar plot` - ...But after using the solution above, I
realized that `check_overlap` actually *removes* text that overlaps, which I
didn't want. I then found this post using `ggrepel`. I knew about this package
but wasn't sure if it was useful for
[stacked bar plots](https://stackoverflow.com/a/55817548/6873133).
The example here kind of works,
except it changes the location of text I don't want moving, like in the larger
bars. I abandoned this and simply removed "bars" with zero values.

`ggplot2 show all factors in legend` - Added a `drop = False` in there,
found [here](https://stackoverflow.com/a/33765825/6873133)

`ggplot2 stacked bar plot position dodge with change in x` - I was frustrated
with where the text annotation for my columns were.
[This solution here](https://stackoverflow.com/a/58256551/6873133)
didn't exactly solve it outright for me, but it did show me what's possible to
move around the column label. The parameter I was looking forward was simply
the `x` and `y` aesthetics, which allow me to fine tune where my text labels
are. In hindsight, this makes sense.

Guess I was wanting to be a bit more verbose on my thoughts on these
challenges. At this point, I was doing some very custom changes to my plots.


## Reflection

A similar conclusion to the software engineering post I linked at the
beginning, being a data scientist will still need to search and look things up.
Regularly.

I've never really thought too much about what I've had to search for during my
job. This turned out to be a really fun exercise in mindfulness. Ideally, I
would keep track of these kinds of searches and then find ways to write helper
functions to do these things for me. Alas, a low priority for now. But a
possible side project idea.

Altogether, thank you Stack Overflow solutions, the whole ggplot2 system, and
the countless volunteers out there writing out their solutions on the web for
making my work possible.
