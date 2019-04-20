---
layout: post
title: Initial reflections on daily blogging
categories: [reflection]
tags: [blogging, reflection, daily]
---

Here are some quick thoughts on the *thought* of daily blogging (yesterday was
a busy day with seminars).

I've come to appreciate daily blogging because it forces you to talk about a
single concept and distill it.
Otherwise, you spend too much time on topic and waste time you could be
productive in doing something else.

Additionally, I've felt this to help with my information overload and to help
create a thread of continuity between days and remember what I experienced that
day.
I should definitely strive for an
[information diet](https://waynehonors.files.wordpress.com/2015/01/summary-of-clay-johnson-information-diet.pdf)
(PDF).

> "Consume deliberately. Information over affirmation."

## Things to share

### Python decorators continued

Python decorators are just Python functions used in a wrapper way.

You can decorate functions to take account of those function inputs with
`*args` and `**kargs`,
for positional and key-worded arguments.

```python
def do_twice(func):
    # Not the below parameter arguments
    def wrapper_do_twice(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper_do_twice
```

Now, decorated functions can take arguments.

```python
from decorators import do_twice

@do_twice
def greet(name):
    print(f"Hello {name}")
   
greet("World")
# Hello World
# Hello World
```
