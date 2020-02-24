---
layout: post
title: Bonferroni p-value correction in R
categories: [statistics, R]
tags: [statistics, p-values, R]
---

Recently, I had a project where I calculated many p-values and discovered that
this method didn't correct for multiple comparisons.
In order to adjust for them,
I searched for a way in R and realized that implementing a multiple testing
adjustment is easier than I thought/remembered.

The method I'll cover a simple correction method called the
[Bonferroni correction](https://en.wikipedia.org/wiki/Bonferroni_correction),

Simply speaking,
each statistical test you make has a chance of erroneous inference because the
number of rare events increases.
As the these rare events increases the chance of incorrectly rejecting the null
hypothesis increases.

This chance of incorrectly rejecting the null hypothesis is what we want to
correct for.

You can read more
[here](https://en.wikipedia.org/wiki/Multiple_comparisons_problem).
But now let's get to the code[^rnorm].

[^rnorm]: In looking into `rnorm()`, I found out you can precisely specify the
    mean of *each* random number generated. In this case, the first 25 numbers
    have a mean of 0, and the second 25 numbers have a mean of 3.

```r
# Reproducibility
set.seed(123)

# Create sample data of 50 data points and the p-value from zero
x <- rnorm(50, mean = c(rep(0, 25), rep(3, 25)))
p <- 2*pnorm(sort(-abs(x)))

# See unadjusted p-values and adjusted p-values
round(p, 3)
#  [1] 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.001 0.002
# [13] 0.003 0.004 0.005 0.007 0.007 0.009 0.009 0.011 0.021 0.049 0.061 0.063
# [25] 0.074 0.083 0.086 0.119 0.189 0.206 0.221 0.286 0.305 0.466 0.483 0.492
# [37] 0.532 0.575 0.578 0.619 0.636 0.645 0.656 0.689 0.719 0.818 0.827 0.897
# [49] 0.912 0.944

round(p.adjust(p, "bonferroni"), 3)
#  [1] 0.000 0.001 0.001 0.005 0.005 0.006 0.007 0.008 0.011 0.019 0.031 0.081
# [13] 0.165 0.177 0.262 0.342 0.353 0.440 0.470 0.565 1.000 1.000 1.000 1.000
# [25] 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000
# [37] 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000 1.000
# [49] 1.000 1.000
```

Above,
we've generated a random normal distribution of numbers with varying means.
Next,
we calculate it's p-value,
with the null hypothesis being the mean is zero.

The function to adjust p-values is intuitively called `p.adjust()` and it apart
of base R's built-in `stats` package.
This function takes in a vector of p-values and adjusts it accordingly.

The Bonferroni method is a conservative measure,
meaning it treats all the tests as equals.
In this case, it divides the significance level ($$\alpha$$) by the number of
comparisons ($$m$$).

$$\frac{\alpha}{m}$$

Adjusting the p-values themselves here requires we instead multiply the p-value
by the number of comparisons,
rather than dividing.

Alternative controlling procedures are more sophisticated in its correction.

Just a proof that this is how the function works, we can manually adjust these
p-values to arrive at the same values.

```r
# If the p-value goes greater than 1, just set to one, otherwise multiply the
# p-value
auto <- round(p.adjust(p, "bonferroni"), 3)
manually <- round(ifelse(p*length(p) > 1, 1, p*length(p)), 3)

identical(auto, manually)
# [1] TRUE
```

[Here's](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/p.adjust.html)
the help page for the `p.adjust()` function for more information.

