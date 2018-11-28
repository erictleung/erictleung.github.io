---
layout: post
title: Translational Medicine Talk Summary
date: 2015-09-17
category: genomics
tags:
- health it
- bioinformatics
- population
- big data
---


I recently attended the [joint conference][ismbeccb2015] between [International
Conference on Intelligent Systems for Molecule Biology][ismb] and [European
Conference on Computational Biology][eccb] in Dublin, Ireland. One talk I went
to was Winston Hide's talk "Translational Medicine: The Current Landscape and
Future Directions." The following is my summary of that talk, along with some
personal commentary from me.

On a quick side note, Hide mentions that Russ Altman's [annual Translational
Bioinformatics Year in Review talk][tbi_year] has influenced his talk.
[Here][tbi_papers] is an awesome list of links from Altman's talk.

[ismbeccb2015]: http://www.iscb.org/ismbeccb2015
[ismb]: https://en.wikipedia.org/wiki/Intelligent_Systems_for_Molecular_Biology
[eccb]: http://eccb.iscb.org/
[tbi_year]: https://rbaltman.wordpress.com/2015/03/26/slides-from-tbi-year-in-review-2015/
[tbi_papers]: http://www.gettinggeneticsdone.com/2014/04/russ-altmans-translational.html

## Brief Intro to Translational Medicine

One definition of "translational medicine" is the combination of scientific
discovery and health improvement. Another succinct way to put it is a
"bench-to-bedside" approach, taking research findings at the "bench" and
applying it to the "bedside" where it affects patients, public health, and
others fields such as policy. This is a very powerful approach and as Winston
Hide puts it, "we're dealing with people, bringing quantitative information to
people."

<!--break-->

## Beginnings

There were up's and down's to translational sciences through the 1950's and
onward. The three up's were induced by pharmacology, affinity assays, and
monoclonal antibodies.

Drugs and pharmacology are the first things that come to mind when thinking
about bench-to-bedside. You start off finding a binding site of a protein, which
when blocked can decrease the amount of a disease inducing agent. What now?
Design a drug for it! This boom of translational sciences occurred in the 1950's
using pharmacological, biochemical, and physiological approaches. 

The next wave of innovation was in the 1980's with affinity assays. My guess is
that these are referring to [ligand binding assays][lba]. One possible invention
was [Partition Affinity Ligand Assay (PALA)][partial].

Lastly, before getting to where we are now with high throughput sequencing,
there was another upswing due to [monoclonal antibodies][mono], as opposed to
[polyclonal antibodies][poly]. Monoclonal antibodies are amazing because they
bind to single antigen type, which make them very specific in targeting. One
example of using monoclonal antibodies is in [cancer drugs][cancer_thr]. Here is
more on the [difference between monoclonal and polyclonal antibodies][compare].

[lba]: https://en.wikipedia.org/wiki/Ligand_binding_assay
[partial]: http://goo.gl/nOFN2i
[mono]: https://en.wikipedia.org/wiki/Monoclonal_antibody
[poly]: https://en.wikipedia.org/wiki/Polyclonal_antibodies
[cancer_thr]: http://goo.gl/JjWEZU
[compare]: http://goo.gl/UX5Yif

## The Tsunami of Data

There was a time when there was just [THE human genome project][hgp], trying to
sequence THE genome. Nowadays, it is all about sequencing MANY whole genomes.
To make this data tsunami even larger, there are complementary pieces of
information that go with the genome analyses (such as [annotation data from
ENCODE][encode] and patient information) which make the analyses more difficult.
The exciting, rugged sea of computational analyses also yearns for a bit of
oversight in order for analyses and infrastructure to be scalable and stable. In
time, we may have the problem of [too much data and not enough resources to
store and analyze it][bigdata].

[hgp]: http://www.genome.gov/12011238
[encode]: https://www.encodeproject.org/
[bigdata]: http://dx.doi.org/10.1371/journal.pbio.1002195

## Biomedical Discovery

[Lee Hood][hood] was quoted saying something along the lines of "biomedical
discovery is becoming a data science." This was back in 1993 and he also
commented on how around 20% would involve data. Times have changed and that
percentage is much larger. Lee Hood went off to co-found [the Institute for
Systems Biology][isb] in 2000 and since then has made great strides in data
driven research.

[hood]: https://en.wikipedia.org/wiki/Leroy_Hood
[isb]: https://www.systemsbiology.org/

## IT in Hospitals

In the United States, there has been a shift from using paper health records to
electronic ones, part of which was [facilitated by government policy][mean_use].
The days we dream of where health IT can efficiently and confidently improve
healthcare is still but a dream. It is much easier to start from scratch but it
is difficult to just changed the workflows of a hospital full of healthcare
teams.

[mean_use]: http://goo.gl/8fKrxn

## Population Sequencing

Recently, there was a *Nature* article on the [large-scale whole genome
sequencing of the Icelandic population][iceland]. First was sequencing one
genome, next is sequencing many genomes, lastly is sequencing populations and
communities of genomes to gain insight into human disease and health. Once this
data from the Icelandic population is available to use, coupling it with
individual genome analysis is bound to give great insights.

[iceland]: http://www.nature.com/ng/journal/v47/n5/full/ng.3247.html

## Consumer Genetic Testing

Sequencing is done on populations because governments will invest the high cost
for sequencing. However, sequencing is becoming cheap enough to market to the
general public with [direct-to-consumer genetics testing][dtc]. Here's a
[comprehensive analysis][dtc_more] of these genetic tests. Some such companies
are:

- [Insight][insight]: $3750
- [23andMe][23andme]: $99
- [Gene by Gene][gene]: price varies (you choose your test by gene)
- [Mapmygenome][map]: ~$377 (given the conversion rate from rupee)

[dtc]: http://ghr.nlm.nih.gov/handbook/testing/directtoconsumer
[dtc_more]: http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3767220/
[insight]: http://insight-dna.com/
[23andme]: https://www.23andme.com/
[gene]: https://www.genebygene.com/
[map]: http://mapmygenome.in/

## Do These Genetic Tests Work?

Recently, there was a [New York Times article][nyt] by Kira Peikoff on
direct-to-consumer genetic tests and their disagreement with each other's test
results.  She got tests from three different companies and got different
answers. Why? The lack of solid evidence to make these claims but also the fact
that companies are only performing spot variant checking (i.e. companies choose
which variants to look at), instead of looking at the whole genome.  The analogy
they used in the article was "Imagine if you took a book and you only looked at
the first letter of every other page," said [Dr. Robert Klitzman][robert]. 

[nyt]: http://nyti.ms/183SUSJ
[robert]: https://www.mailman.columbia.edu/people/our-faculty/rlk2

## Genes to Drugs Paradigm Shift

In the past, genetic analyses were performed on single genes. From the insights
on these genes, drug targets were identified to make a drug from. However, in
practice, this drug would fail because of underlying interactions the gene in
involved in which make the drug fail. In other words, developing a drug in this
way doesn't account for the body's ability to maintain equilibrium. 

Thus, there is a paradigm shift in thinking of networks of genes, rather than
the individual genes separately. This has allowed more complex understanding, in
theory, of a drug's effectiveness with a larger picture of what is really going
on. You can even add genetic, information from model organisms, and expression
data to broaden the picture even more.

## Accelerating Medicines Partnership

It is great if you can create a drug and maybe it'll work. However, that is just
one piece of the puzzle. There are funders and other drug companies. The funders
want people to work together so they can efficients invest their money.
Meanwhile, the drug companies want to minimize as much risk as possible, as
[developing drugs][drug_dev] and getting it past the three phases of drug design
is a long process. Thus, the [Accelerating Medicines Partnership][amp] was
founded as a public-private partnership between NIH, FDA, ten biopharmaceutical
companies, and others. They plan on tackling Alzheimer's disease, type 2
diabetes, and lupus.

[drug_dev]: https://en.wikipedia.org/wiki/Drug_development
[amp]: http://www.nih.gov/science/amp/index.htm

## Genes Expression and Networks

Coming back to genes and networks, you can visualize and understand a much
larger picture of what is going on in the body when you look at networks of
networks. Similar to a [gene co-expression network][co_nets] where you join
points in a graph if they interact, you can create what is called a pathway
co-expression network whereby a collection of gene interactions (i.e. pathways)
interact with each other. This allows you to get at a functional model of if
this pathway of genes goes up, this other pathway goes down. 

[co_nets]: https://en.wikipedia.org/wiki/Gene_co-expression_network

## Common Cloud Storage for Analysis

Data analysis and knowledge comes from the concerted efforts of everyone. With
large datasets that are the subject of analyses, sharing the analysis can't be
as simple as emailing or transferring the data to a colleague. 

There has been [discussions about using the cloud][cloud] to alleviate this
collaboration problem, but also to make the analyses more efficient. According
to that linked discussion by *Nature* costs more ($18 on the cloud vs $200 on
academic data centers) and takes more time (6 weeks on the cloud vs 6+ months in
data centers). Some companies have made an effort to make these analyses faster
and more accessible.

- [Sage Bionetworks' Synapse][synapse]: publish workflows and have own DOI
- [HSCI Stem Cell Commons][hsci]: publish data and have analyses right along
  data for reproducibility

[cloud]: http://www.nature.com/news/data-analysis-create-a-cloud-commons-1.17916
[synapse]: https://www.synapse.org/
[hsci]: http://stemcellcommons.org/

## Future

Hide finishes with some things to look out for in the future: a data patient,
proactive treatments, machine learning treatments, interplay between genetics
and environment, and predict genetics.

The future may hold a time where patients and their treatments will be data
driven whereby as the disease is progresses, it can be analyzed in real-time so
that treatments can be effectively developed. 

A step before that may be improving predicting disease incidence and making
preventive measures for the disease to develop. Along the lines of prediction,
smart and trained systems, such as supercomputer Watson, can be used to crunch
massive amounts of data and make informed advice on treatments to assist
physicians understand the plethora of data on their patients.

Lastly, we hope to understand the role the environment plays on your genome to
create who and what you are. Predictive simulations might also be developed to
guess what you are based solely on your genome. 

## Conclusion

The field of translational medicine is still in its infancy. There are hurdles
in scaling analyses and making it easier available to the public but standards
for interpretation and governance may help solve the problem. Partnerships
between industry and government agencies also help create a sustainable model
for genomic analyses to help improve human health.
