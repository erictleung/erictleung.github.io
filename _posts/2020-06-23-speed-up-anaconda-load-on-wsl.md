---
layout: post
title: Speed up Anaconda load on WSL
categories: []
tags: [anaconda, miniconda, wsl, windows]
---

I use the
[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
on my work computer. Lately, the startup time for my Linux shell has taken too
long for my taste and I set out to try and figure out why. I was able to figure
out how to decrease my nearly 15 second wait (an eternity in programming) to
nearly instantaneous. There is a slightly caveat to it but I don't mind that
extra inconvenience.

After a lot of searching around, I found out that my Anaconda/miniconda
initialization was hogging all the time. This is because by default, I've set
it up where `conda activate base` is called every time I create a shell. What
the final solution does is remove this step and have you manually activate the
environment whenever you need it.

Before I figured the eventual solution, I tried to blame the WSL shell itself.
Looking around, I found there was an upgrade to WSL 2 available. This brought
me to threads like [this one](https://github.com/microsoft/WSL/issues/4737).

One
[solution](https://github.com/microsoft/WSL/issues/4737#issuecomment-565201243)
suggested to run

```bash
sudo apt update
sudo apt dist-upgrade
```

This gave me hope but it didn't work. I eventually figured that because it was
a work computer and I didn't want to risk upgrading to a new system and
everything breaking, I would abandon this potential solution.

This frustration then brought me to
[this thread](https://github.com/ContinuumIO/anaconda-issues/issues/10173).
It sounds like I'm not the only one who has experienced this lag time. Even
though the thread was from 2018, it seems relevant.

I gave their solutions a try. No luck.

The first thing I tried was
[change the absolute path to a relative one](https://github.com/ContinuumIO/anaconda-issues/issues/10173#issuecomment-441386441).
I was skeptical this would work. And I was right in thinking so.

Scrolling down in the thread a bit more, I came across
[this comment](https://github.com/ContinuumIO/anaconda-issues/issues/10173#issuecomment-444243367).
Near the bottom of the comment, it notes to comment out the code between `# >>>
conda initialize >>>` and `# <<< conda ini <<<`. Then to just copy the inner
`if`/`else` statements.

In my bash configuration (which should be somewhere either in `.bashrc` or
`.bash_profile`), I have the following:

```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/leunge/miniconda/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "~/miniconda/etc/profile.d/conda.sh" ]; then
        . "~/miniconda/etc/profile.d/conda.sh"
    else
        export PATH="~/miniconda/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

I commented most of that out and copied out that inner `if` block.

```bash
if [ -f "~/miniconda/etc/profile.d/conda.sh" ]; then
    . "~/miniconda/etc/profile.d/conda.sh"
else
    export PATH="~/miniconda/bin:$PATH"
fi
```

Previously, my shell configuration essentially ran `conda activate base` with
every new shell. With this new setup, I am no longer in an activated
environment.

To double check that this was the issue, I timed it.

```bash
$ time conda activate base

real    0m15.461s
user    0m3.188s
sys     0m11.516s
```

Yep. That was the issue.

But can I still access `conda` and all of my tools? It turns out if I need to
be in an Anaconda environment, I'll have to remember to run `conda activate
base` before doing anything. The `export` statement in the above code block
ensures I still have access to `conda` and my Anaconda instance of Python.

This is a minor inconvenience I'm willing to take for the sake of time.

```bash
$ time bash ~/.bash_profile

real    0m0.131s
user    0m0.016s
sys     0m0.078s
```
