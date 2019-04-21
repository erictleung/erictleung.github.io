---
layout: post
title: Confusion behind Student's t-test example in R
categories: [statistics, R]
tags: [assumptions, statistics, R]
---

I thought I understood the t-test. It turns out, I don't.

If you look at the documentation for the
[`t.test`](https://stat.ethz.ch/R-manual/R-patched/library/stats/html/t.test.html)
function to perform t-tests,
there is this example:

```R
t.test(1:10, c(7:20, 200))
#         Welch Two Sample t-test
#
# data:  1:10 and c(7:20, 200)
# t = -1.6329, df = 14.165, p-value = 0.1245
# alternative hypothesis: true difference in means is not equal to 0
# 95 percent confidence interval:
#  -47.242900  6.376233
# sample estimates:
# mean of x mean of y
#   5.50000  25.93333
```

This compares the means of a set of numbers
between 1 through 10 and
7 through 20 with 200.

I found this odd because intuitively, this doesn't make sense.
I expected this to have a significant difference in means with the 200 in
there.
I felt perplexed by this example because I was showing this to a student and
found myself questioning my own assumptions about this test.

With some searching around, I'm glad to find out that I'm not
[the only one confused by this](https://stats.stackexchange.com/q/123097).

The explanations from others suggest that the addition of the 200 value
increases the variance used in the t-statistic.
Thus, it changes the t-statistic to not perceive a difference in means.

Looking at the documentation once more,
`var.equal` is set to `FALSE`.
With the help of
[Wikipedia](https://en.wikipedia.org/wiki/Student%27s_t-test#Independent_two-sample_t-test),
there are various ways to calculate the t-statistic,
depending on your data.

For our toy example, R tells us we are doing a "Welch Two Sample t-test."
The t-statistic for this is define as

$$t = \frac{\bar X_1 - \bar X_2}{s_{\bar \delta}}$$

where

$$s_{\bar \delta} \sqrt{\frac{s^2_1}{n_1} + \frac{s^2_2}{n_2}}$$

Adding 200 into the mix, it radically changes the variance.

```R
var(c(7:20, 200))
# [1] 2335.067
var(c(7:20))
# [1] 17.5
```

This higher variance is pooled into the demoniator of the t-statistic.
Thus,
it pulls down the statistic to be lower and to no longer be significant.

So in the end,
it appears I've forgotten my assumptions about how a t-test works:
equal sample sizes, equal variances.
These are the kinds of learning opportunities I love:
easy looking questions,
but give you unintuitive answers.
Lastly,
the review lesson here is to check your assumptions.

## Things to share

### Python metaclasses

https://realpython.com/python-metaclasses/

