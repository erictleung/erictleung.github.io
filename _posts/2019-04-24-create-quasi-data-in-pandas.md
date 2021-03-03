---
layout: post
title: Create quasi-realistic data in Pandas
categories: [python]
tags: [python, pandas, data]
---

**Edit 2021-03-02**: it appears that as of
[2020-01-06](https://github.com/pandas-dev/pandas/pull/30745),
the `pandas.util.testing` module has been deprecated.

I'm reading through
[some interesting tips for Python pandas](https://realpython.com/python-pandas-tricks/)
and just sharing one that I found unique because it's not something I thought
would be built-in.

The neat feature I came across is the testing module in pandas.
Here is some code to demonntrate

```python
>>> import pandas.util.testing as tm
>>> import numpy as np
>>> np.random.seed(1234)
>>> tm.N, tm.K = 10, 5 # Specify rows and columns
>>> tm.makeDataFrame().head()
                   A         B         C         D         E
VtM1m0y5pX  1.230841  0.347694 -0.563551 -1.162548  0.928495
xPAERES8A2  2.000745 -0.554826 -1.780291 -0.206425  0.650911
64WCfqj2VY -0.672194 -0.804660  0.732865  1.054327  0.498752
W7mLIM6dNl  0.913888  2.476419  0.196534  2.555463  0.061842
aPlqdctmbl -0.404620 -0.245478  1.456968 -0.027662 -0.932364
```

It is but one of many other ways to create data,
as shown with this fabulous list.

```python
>>> [i for i in dir(tm) if i.startswith('make')]
['makeBoolIndex',
 'makeCategoricalIndex',
 'makeCustomDataframe',
 'makeCustomIndex',
 'makeDataFrame',
 'makeDateIndex',
 'makeFloatIndex',
 'makeFloatSeries',
 'makeIntIndex',
 'makeIntervalIndex',
 'makeMissingCustomDataframe',
 'makeMissingDataframe',
 'makeMixedDataFrame',
 'makeMultiIndex',
 'makeObjectSeries',
 'makePanel',
 'makePeriodFrame',
 'makePeriodIndex',
 'makePeriodPanel',
 'makePeriodSeries',
 'makeRangeIndex',
 'makeStringIndex',
 'makeStringSeries',
 'makeTimeDataFrame',
 'makeTimeSeries',
 'makeTimedeltaIndex',
 'makeUIntIndex',
 'makeUnicodeIndex
 ]
```

[Here](https://github.com/pandas-dev/pandas/blob/master/pandas/util/testing.py)
you can find the code to all of these methods and their documentation.

## Things to share

### Vim macros

You can register a macro,
or a series of commands,
to any letter or number.

To create the macros, press

```
q<letter><commands>q
```

So you start and end with <kbd>q</kbd>.

To run this recently created macros, you press

```
<number>@<letter>
```

where `<number>` is the number of times you want to execute the command,
and `<letter>` is the letter you assigned the macro to.

More on macros
[here](https://vim.fandom.com/wiki/Macros)
and in
[the official documentation](http://vimdoc.sourceforge.net/htmldoc/usr_10.html#10.1)

### Output quick Python code through Vim

From the command line, you can run simple Python as

```shell
$ python -c 'import math; print(math.pi)'
3.141592653589793
```

Sometimes, you may want to output this value straight into a text file.
And you might even want to do that without leaving Vim.

You can do it by running this

```
:r !python -c 'import math; print(math.pi)'
```


