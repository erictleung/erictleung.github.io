---
layout: post
title: A Few Useful Things to Know About Machine Learning Part 1
category: data science
---

I ran into this very enticing paper ["A Few Useful Things to Know About Machine
Learning"][ml_paper] by [Pedro Domingos][pedro], who is at the University of
Washington.  Myself being in bioinformatics and computational, I have run into
lots of machine learning (or statical learning if you will) algorithms since I
have chosen to be in this field. I plan on writing a summary of the useful tips
on machine learning and then comment on my interpretation and understanding of
the concept.

[ml_paper]: http://www.cs.washington.edu/homes/pedrod/papers/cacm12.pdf
[pedro]: http://homes.cs.washington.edu/~pedrod/

## Learning = Representation + Evaluation + Optimization

There are three parts to making a "learning" model: a representation, an
evaluation, and optimization piece. The representation describes how you will
describe and talk about the model. Some kinds of representations are decision
trees and K-nearest neighbors. Both are types of learning models but each look
at your problem in a different way.

Now that we have a picture of our problem, we need a way to check whether or not
a particular sample is good or not. This step is called the evaluation function
or scoring function. 
