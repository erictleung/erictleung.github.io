---
layout: post
title: Social-technical model for studying health information technologies
categories: [healthit]
tags: [ehrs, safety, models, socio-technical]
---

Today was dominanted by a series of seminars on the electronic medical records,
safety, and all the forces that are interacting with them.

There were two seminars,
one by
[Dr. Dean Sittig](https://www.ncbi.nlm.nih.gov/pubmed/?term=Sittig%20DF%5BAuthor%5D&cauthor=true&cauthor_uid=30537881)
and another by
[Dr. David W. Bates](https://www.ncbi.nlm.nih.gov/pubmed/?term=Bates%20DW%5BAuthor%5D&cauthor=true&cauthor_uid=16200167).
I'll just touch on one of the seminars given by Sittig,
which I've presumed came from
[this paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3120130/)
Sittig wrote a few years back with Dr. Hardeep Signh on,
"A New Socio-technical Model for Studying Health Information Technology in
Complex Adaptive Healthcare Systems."

The paper outlines 8 interdependent dimenions involved in the,
"design, development, implementation, use, and evaluation of HIT."

The dimensions are:

1. Hardware and software computing infrastructure
2. Clinical content (i.e., the record itself and more)
3. Human computer interface
4. The people
5. Workflow and communication (for and among the people)
6. Internal organizational policies, procesures, and culture (i.e., internal
   pressures)
7. External rules, regulations, and pressures
8. System measurement and monitoring, e.g.,
    - Availability and uptime
    - How features are being used
    - Effectiveness of care delivery for public health reasons
    - Document unintended consequences

It's been a while since I've seen the complexities of the EMR described in this
way.
It was really fascinating and mind boggling to things in each of these 8
dimensions at once!
However, some of the speakers commented that this might be why some researchers
and practitioners just focus on one aspect and think that is the way to fix the
system.

## Things to share

### Working on remote branch

If you have a remote branch on, say, GitHub,
and don't have that branch on your computer,
you can
[use that branch locally](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)
by running the following code:

```sh
git checkout --track origin/serverfix
Branch serverfix set up to track remote branch serverfix from origin.
Switched to a new branch 'serverfix'
```

But in looking this up to write about,
it appears there is a shortcut with just `checkout`.

```sh
git checkout serverfix
Branch serverfix set up to track remote branch serverfix from origin.
Switched to a new branch 'serverfix'
```

### Python decorators

The gist of
[decorators](https://en.wikipedia.org/wiki/Decorator_pattern)
are functions that extend the behavior of other
functions without changing the code directly.
Intuitively from the name itself,
I'm slowly internalizing this as a simple "decoration" on functions that make
them nicer or complement the function.
And to go further, it is more of "wrapping paper" than anything else.

Here's a
[quick abstraction](https://www.python.org/dev/peps/pep-0318/#current-syntax)
that helped me understand what these are.

```python
@dec2
@dec1
def func(arg1, arg2, ...):
    pass
```

```python
def func(arg1, arg2, ...):
    pass
    func = dec2(dec1(func))
```

Note, that the order of which function is applied is from bottom to top.
In this case, `dec1` function is applied first and then `dec2`.

More information can be found at
[RealPython](https://realpython.com/primer-on-python-decorators/)
and
[the references for PEP 318](https://www.python.org/dev/peps/pep-0318/#references).

### Chi-squared test

Just a quick review for me.
[Pearson's chi-squared test](https://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test)
is a statistical test for **categorical data**.

The Chi-squared statistic is calculated as

$$\Chi^2 = \sum^n_{i=1} = \frac{(O_i - E_i)^2}{E_i}$$

where $E_i$ is calculated as
(row total times column total)/total samples.

For two-dimensional data (i.e, contingency tables), this is derived from

$$N \times p_i \times p_j$$

where $p_i,p_j$ are the marginal probability for each column and row.

Some quick links for more:

- [PennState's materials on Chi-square tests](https://onlinecourses.science.psu.edu/statprogram/reviews/statistical-concepts/chi-square-tests)
- [Khan Academy on Chi-square tests](https://www.khanacademy.org/math/statistics-probability/inference-categorical-data-chi-square-tests/chi-square-goodness-of-fit-tests/v/pearson-s-chi-square-test-goodness-of-fit)
