---
layout: post
title: Translational Medicine Talk Summary
published: false
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

## Beginnings

There were up's and down's to translational sciences through the 1950's and
onward. The three up's were induced by pharmacology, affinity assays, and
monoclonal antibodies.

Drugs and pharmacology are the first things that come to mind when thinking
about bench-to-bedside. You start off finding a binding site of a protein, which
when blocked can decrease the amount of a disease inducing agent. What now?
Design a drug for it! This boom of translational sciences occured in the 1950's
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
oversight in order for analyses and infrastructure to be scalable and stable.

[hgp]: http://www.genome.gov/12011238
[encode]: https://www.encodeproject.org/

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
