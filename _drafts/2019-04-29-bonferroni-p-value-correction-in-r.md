---
layout: post
title:
categories: []
tags: []
---

```r
set.seed(123)
x <- rnorm(50, mean = c(rep(0, 25), rep(3, 25)))
p <- 2*pnorm(sort(-abs(x)))

round(p, 3)
round(p.adjust(p), 3)
round(p.adjust(p, "BH"), 3)
```

https://stat.ethz.ch/R-manual/R-devel/library/stats/html/p.adjust.html

## Things to share
