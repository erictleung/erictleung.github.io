---
layout: post
title: Using bash from within Jupyter notebooks
---

In developing some lectures using Jupyter notebooks, I needed to use a `bash`
kernel, where the code blocks run `bash` commands. Here I note how to setup the
`bash` kernel in a Jupyter notebook and some tips I ran into.

<!--break-->

## Background and Searching

In some quick Google searching, I ran [a blog post][slhogle] on setting up the
bash kernel. It assumes that you have a Anaconda/Conda environment installed.
The full Anaconda distribution can be found [here][anaconda] and the Conda
package manager documentation are [here][conda].

[slhogle]: http://slhogle.github.io/2017/bash_jupyter_notebook/
[anaconda]: https://www.anaconda.com/download/
[conda]: https://conda.io/docs/


## Creating Python environment and kernel

Once you've have the Anaconda environment installed, you can proceed with
creating a Python environment with notebook support.

```shell
# Create Python 3 environment with notebook support
conda create -n py3 python=3 ipython notebook
```

Now, this environment will allow you to create


## Jupyter Notebook Extensions

https://www.kdnuggets.com/2018/03/top-5-best-jupyter-notebook-extensions.html
https://github.com/hhatto/autopep8
