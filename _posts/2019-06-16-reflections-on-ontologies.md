---
layout: post
title: Reflections on ontologies
categories: [reflections]
tags: [ontologies, insights, tutorial, emp, microbiome]
---

Several months ago, I attended
[a workshop on ontologies][wkshp].
For the longest time since I started my graduate program, I always had troubles
understanding what you *do* with ontologies and what makes them useful.

Generally know that they encode meaning between the elements within. But then I
was stuck on the, "What next?" I know it doesn't just sit there. After
attending this workshop on ontologies, I have a better intuition about what
makes these things useful.

[wkshp]: https://github.com/BioData-Club/obo-tutorial

## Basic definitions

First off, the ontologies I am talking about are the
[information science][ontowiki]
ones, and not the
[metaphysical definition][mw].

> In computer science and information science, an **ontology** encompasses a
> representation, formal naming and definition of the categories, properties
> and relations between the concepts, data and entities that substantiate one,
> many or all domains of discourse.

[ontowiki]: https://en.wikipedia.org/wiki/Ontology_(information_science)
[mw]: https://www.merriam-webster.com/dictionary/ontology

## Insights on usefulness

I'm retrospectively reflecting on my "ah-ha" moment, but I think the table
shown in
[this section][tb]
was very helpful in revealing who ontologies are useful.

For example, if you want to encode an investigator's name in some data file,
one could simply use the investigator's initials or names. This can become
messy, especially if multiple people work on this file and may become
inconsistent.

This is where ontologies can come in handy. A better format to encode
investigators into a file is to use
[ORCiD][orcid],
a persistent digital identifier. This makes it better because there is a
[controlled vocabulary][cv]
for which to describe these individuals. This allows less room for mistakes and
ambiguity in filling in this information. Additionally, this allows to easier
sharing of this data if you were to share it with colleagues.

[tb]: https://github.com/jamesaoverton/obo-tutorial
[orcid]: https://orcid.org/
[cv]: https://en.wikipedia.org/wiki/Controlled_vocabulary

## In relation to microbiome research

In the microbiome world that I currently exist in, there exists the
[Earth Microbiome Project (EMP)][emp],
an initiative to "characterize global microbial taxonomic and functional
diversity for the benefit of the planet and humankind."

The EMP has built its own ontology, namely the
[EMP Ontology][empo].
There is a table with example samples and how they might be classified. This
shared vocabulary to describe samples allow more effective comparisons and
inference on these samples.

[emp]: http://www.earthmicrobiome.org/
[empo]: http://www.earthmicrobiome.org/protocols-and-standards/empo/

## Summary

My big "ah-ha" moment for ontologies was that it is a controlled vocabulary for
which to describe and share data efficiently. There may be more uses for
ontologies, but for now, this is a good intuition for myself as to why
ontologies are useful. This is especially true with all this data being
generated around us in biomedicine and technology.
