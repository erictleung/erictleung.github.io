---
layout: post
title: Environment modules on clusters
categories: [programming]
tags: [modules, hpc]
---

When working on a supercomputing cluster at, say, a university, it is important
to have the right development or working environment. Without the correct
software, computational research would grind to a halt.

Here I'll discuss briefly what I've learned about a kind of configuration tool
using [environment modules](http://modules.sourceforge.net/). I checked my
university's cluster and it appears they do have it installed.

From my understanding, modules are a framework to easily change the shell
environment. This appears to be a more general version of
[conda](https://docs.conda.io/en/latest/), which is primarily used to configure
Python environments.

One example of modules being used is at the
[University of Pennsylvania](https://hpcwiki.pmacs.upenn.edu/index.php/HPC:Environment_Modules),
where you can get an idea of how to use it.

To see what kind of environments you have available, you can run the following.

```sh
$ module avail

------------------- /usr/share/Modules/modulefiles --------------------
dot         module-info null
module-git  modules     use.own

-------------------------- /etc/modulefiles ---------------------------
mpi/openmpi-x86_64
```

Here we can notice two groups of modules that I have available. What's nice is
that it also shows where those module files are.

For example, the `null` modules configuration file is this.

```
#%Module1.0#####################################################################
##
## null modulefile
##
## modulefiles/null.  Generated from null.in by configure.
##
proc ModulesHelp { } {
    global version

    puts stderr "\tThis module does absolutely nothing."
    puts stderr "\tIt's meant simply as a place holder in your"
    puts stderr "\tdot file initialization."
    puts stderr "\n\tVersion $version\n"
}

module-whatis   "does absolutely nothing"

# for Tcl script use only
set     version      "3.2.10"
```

These modules seemed all cool and all. But then I was curious how I could use
my own. Being on a shared resource, most people like me will lack the user
permissions to modify root level files.

Luckily there is a way to load personal modules.

Say I copied the contents of the above module file to my home directory. I can
then just point the `module` program to the file itself. Here I've also named
the file `null` and put it into my home directory.

```sh
$ module load ~/null
```

To see it was loaded, we can run the following.

```sh
$ module list
Currently Loaded Modulefiles:
  1) /home/users/leunge/personal
```

This may be a convenient way to share environments across multiple users. This
could help so that instead of each person having personal configurations,
`module` configurations could point to some shared resources. This will not
only free up storage on each individual's partition, but also to keep
everyone's shell free of unnecessary environmental configurations and paths.

