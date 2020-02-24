---
layout: post
title: Get first element of nested data
categories: [R]
tags: [tidyverse, R, data cleaning]
---

I was cleaning some data today and found myself wanting to grab just the first
row of a set of rows belonging to a certain group. Here's how to do that using
some tidyverse packages in R.

```r
library(tidyr); packageVersion("tidyr")
#> [1] '0.8.3'
library(dplyr); packageVersion("dplyr")
#> Attaching package: 'dplyr'
#> The following objects are masked from 'package:stats':
#> 
#>     filter, lag
#> The following objects are masked from 'package:base':
#> 
#>     intersect, setdiff, setequal, union
#> [1] '0.8.0.1'
library(purrr); packageVersion("purrr")
#> [1] '0.3.2'

iris %>%
    group_by(Species) %>%
    nest() %>%
    mutate(sample = map(data, function(x) head(x, 1))) %>%
    select(-data) %>%
    unnest()
#> # A tibble: 3 x 5
#>   Species    Sepal.Length Sepal.Width Petal.Length Petal.Width
#>   <fct>             <dbl>       <dbl>        <dbl>       <dbl>
#> 1 setosa              5.1         3.5          1.4         0.2
#> 2 versicolor          7           3.2          4.7         1.4
#> 3 virginica           6.3         3.3          6           2.5
```

<sup>Created on 2019-06-18 by the [reprex package](https://reprex.tidyverse.org) (v0.2.1)</sup>

So here, I've take the ubiquitous `iris` dataset and grouped the rows by
species and took the first row. You can probably do a random sample in the
`map()` function for stratified sampling.

