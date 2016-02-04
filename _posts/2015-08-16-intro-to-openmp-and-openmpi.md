---
layout: post
title: Introduction to OpenMP and Open MPI
category: linux
---

Computers today are getting faster and more powerful everyday. In the past, the
answer to faster computers was to increase the clock speed (e.g. 2.0 GHz to 2.5
GHz) of the computer. This, however, also increases the power consumption of the
computer. This increasing power consumption is not sustainable because with more
power, the most heat that is generated and even more power is needed to cool
down the processors. Thus, faster hardware is not the answer.

<!--break-->

The solution for faster computers has now shifted from improving the hardware to
optimizing the software. Instead of just one very fast processor, there would be
smaller but multiple processors doing the work. Thus, parallel processing is
needed and frameworks such as OpenMP and Open MPI were created to facilitate
parallel processing. Additionally, recently the White House [blogged][wh] about
establishing the [National Strategic Computing Initiative (NSCI)][nsci] to lead the
U.S. in advanced computing.

[wh]: https://www.whitehouse.gov/blog/2015/07/29/advancing-us-leadership-high-performance-computing
[nsci]: https://www.whitehouse.gov/sites/default/files/microsites/ostp/nsci_fact_sheet.pdf

## OpenMP

Just briefly, OpenMP (which stands for Open Multi-Processing) is an API which
supports multi-platform shared memory multiprocessing programming in C, C++, and
Fortran (1). What this means is that you can parallize your programs on a shared
memory machine (e.g. your desktop or laptop with multiple processing cores).

[1]: https://en.wikipedia.org/wiki/OpenMP

## Open MPI

Open MPI, similarly, enables the user to parallize their programs but in a
different fashion. Open MPI is an implementation of MPI, which stands for
"message-passing interface." MPI is "a message-passing library interface
specification." More information can be found in the "MPI: A Message-Passing
Interface Standard" documentation (2).

[2]: http://www.mpi-forum.org/docs/mpi-3.1/mpi31-report.pdf

### Message Passing

The reason Open MPI is different from OpenMP is because Opne MPI works on
distributed memory systems, i.e. supercomputer or cluster computers. Thus,
message passing makes more sense when you think about it in terms of a cluster
of computers.

### Specification

MPI is a way of doing computing, not necessarily the actually implementation.
Open MPI is just one implementation of MPI. Here are some other implementations
of MPI in R and Python:

- `Rmpi`: https://cran.r-project.org/packages=Rmpi
- `pbdMPI`: http://cran.r-project.org/package=pbdMPI
- `pyMPI`: http://pympi.sourceforge.net/
- `mpi4py`: https://bitbucket.org/mpi4py/mpi4py
- `pypar`: https://code.google.com/p/pypar/

### Library Interface

To reiterate, MPI is a way to parallize your functions and programs, but a
language. So any implementation must create a library in order to interface with
the hardware you are trying to optimize.

Source:

1. [https://en.wikipedia.org/wiki/OpenMP](https://en.wikipedia.org/wiki/OpenMP)
2. [http://www.mpi-forum.org/docs/mpi-3.1/mpi31-report.pdf](http://www.mpi-forum.org/docs/mpi-3.1/mpi31-report.pdf)
