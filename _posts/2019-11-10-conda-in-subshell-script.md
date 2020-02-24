---
layout: post
title: Execute conda in subshell script
categories: [conda]
tags: [conda, bash, scripting]
---

When running `conda activate` in a `bash` script, I came across a similar error
message to this.

```shell
CommandNotFoundError: Your shell has not been properly configured to use 'conda activate'
```

With a quick Google search, [this](https://github.com/conda/conda/issues/7980)
thread showed up and has been helpful with several suggestions.

The most voted on and immediate solution was adding this to my `bash` script.

```shell
source ~/anaconda3/etc/profile.d/conda.sh
conda activate my_env
```

For your use, you'd have to change your Anaconda/conda path and conda
environment name.

One other solution includes using this instead.

```
eval "$(conda shell.bash hook)"
conda active my_env
```

At first glance, the `conda shell.bash hook` appears to come out of nowhere.
Doing some copy-paste-searching around, this appears to be
[part of the conda initialization](https://askubuntu.com/a/1121792) script. In
other words, this is the more flexible and generalizable form of the solution
above because you don't have to change or specify where that `conda.sh` script.

The last solution suggested is calling the script with `bash -i` to invoke the
interactive environment, which loads the `~/.bashrc` file. This file presumably
has the conda activation script in there.
