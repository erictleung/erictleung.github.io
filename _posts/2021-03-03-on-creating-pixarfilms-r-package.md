---
layout: post
title: On creating the pixarfilms R package
categories: [R]
tags: [pixar, data, rstats]
---

I've never published an R package all the way to CRAN before. So I finally
decided it was time. So here, I will make brief notes of steps I took to
publish it to CRAN and some resources that helped me along the way.

*Note*, this is a data-specific package, so the package development was light
on noting useful functions for an actual useful package.

## Getting the data using the {rvest} package

I like Pixar films and so I wanted to create a package to explore information
about these films.

The data I wanted to scrape was on Wikipedia
[here](https://en.wikipedia.org/wiki/List_of_Pixar_films).

The package that came to mind was to use
[{rvest} package](https://rvest.tidyverse.org/)
to help me scrape the information.

I have also seen the {rvest} package used along with the
[{polite} package](https://github.com/dmi3kno/polite)
to scrape data. But unfortunately, I had some issues using the {polite} package
(version 0.1.1) on my Windows machine where R couldn't find a function.

```
Error in validate_key(key) : could not find function "validate_key"
```

So I abandoned using it. In the future, I will revisit this package and hope I
will be able to use it next time.

## Saving data out using the {usethis} package

To save out the CSV versions of these files, I wanted to automate how I write
out the files. So below, I wrote a simple function that will take the object
you want to save and save it out as a CSV file in the `data-raw/` directory.

```r
#' Save out for external use
#'
#' Write out a data frame to a CSV into the `data-raw/` directory with the same
#' name as the data frame itself.
#'
#' @param x data.frame
#'
#' @example
#' # Saves the mtcars dataset to the path `data-raw/mtcars.csv`
#' save_data(mtcars)
save_data <- function(x) {
  # Notes on deparse() and substitute()
  # https://stackoverflow.com/a/14577878/6873133
  str_path <- paste0(deparse(substitute(x)), ".csv")
  write_csv(x, here("data-raw", str_path))
}
```

These files are only used to keep a CSV record of the data.

The more important file to save is the `.rda` file so that R can read them when
you use the package. We can use the `usethis::use_this()` function to correctly
save it in the right place and as the right format. (*Note*: the {usethis}
package is an amazing helper package for developing other R packages.)

```r
x <- sample(1000)

# Saves both the object x and mtcars
usethis::use_data(x, mtcars)
```

More on this can be found at
[https://r-pkgs.org/data.html](https://r-pkgs.org/data.html).

## Basic package setup

A major resource that helped me all the way through and suggested some
useful packages along the way can be found
[here](https://www.mzes.uni-mannheim.de/socialsciencedatalab/article/r-package/).

It is a long read but it goes way more in-depth than I will.

I also used Hadley Wickham's
[{babynames} package repository](https://github.com/hadley/babynames)
as a template for things I should look for when creating my own data
package.

To start, here are some basic packages to install/load.

```r
library(roxygen2)   # Documentation
library(devtools)   # Development
library(testthat)   # Testing
library(usethis)    # Test code
```

## Create basic tests using the {testthat} package

Because this is a simple data package, there isn't much testing required.
However, in mirroring Hadley Wickham's
[{babynames} R package](https://github.com/hadley/babynames),
I added some tests to check if the data has changed since I last ran it.

Here is a little bit of code that I've used.

```r
test_that("Pixar films head and tail", {
  expect_known_output(
    first_last(pixar_films),
    "test-data_pixar_films.txt",
    print = TRUE
  )
})
```

Here are a five notable points about the test above:

- Use the `test_that()` function to create a test from the {testthat} package
- The first quote parameter is the name of the test (here is it "Pixar films
  head and tail")
- The `expect_known_output()` function compares data to some file output
- That file output is found in the same directory as your tests
- The output file is a simple text file; here named as
  `test_data_pixar_films.txt`

## pkgdown setup with GitHub Actions

GitHub Actions help automate testing and deployment of your website,
conveniently all within GitHub. Here are some convenience functions to set them
up.

```r
# Automate deployment of your website
usethis::use_github_action("pkgdown")

# Automate testing your package
usethis::use_github_action_check_release()
```

This will setup GitHub to deploy your website to your `gh-pages` branch. After
going to your repository settings, you can change it so that your website will
host from there instead of your `main` branch.

Luckily, most of the configuration is done for you, but in case you are curious,
I found
[GitHub Actions' documentation](https://docs.github.com/en/actions)
helpful and clear on how to setup it up. The
["Workflow syntax for GitHub Actions" section](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
was a great reference.

For R specifically, you can find where all of these GitHub Actions are at
[https://github.com/r-lib/actions/tree/master/examples](https://github.com/r-lib/actions/tree/master/examples).

## Create a hexsticker logo using the {hexSticker} package

I used the
[{hexSticker} package](https://github.com/GuangchuangYu/hexSticker)
to help generate the logo. Take a look at the examples in their README to find
common use cases. My use case was to use an external image.
specifying a path to the image when you pass it into the `sticker()` function.

```{r}
library(hexSticker)
library(showtext)

# Add Google Font
font_add_google("Cormorant Garamond", "garamond")
showtext_auto() # Use this font in all rendering

imgurl <- "man/figures/SeekPng.com_pixar-lamp-png_1678537.png"
sticker(
  imgurl,
  # Package settings
  package = "pixarfilms",
  p_size = 25,
  p_color = "#000000",
  p_family = "garamond",
  # Hexagon settings
  h_fill = "#89B9F7",
  h_color = "#000000",
  # Subplot or image settings
  s_x = 1,
  s_y = 0.75,
  s_width = 0.35,
  filename = "man/figures/logo.png"
)
```

I ran across the website
[TinyPNG](http://tinypng.com/),
which can compress your images. This can be useful in keeping the size of your
package small. Alternatively, you can opt to use the
[{tinieR} R package](https://github.com/jmablog/tinieR)
to do things all within R.

## Finishing touches and submitting to CRAN

At this point, we can take a look at the
["Release a package" section](https://r-pkgs.org/release.html#release-submission)
of the R packages book.

You can spell check your code.

```r
# Performs spell check
devtools::spell_check()

# Creates word list for any words not standard, e.g., Pixar
usethis::use_spell_check()
```

As of this writing, there appears to be some bug when using `rhub::check()`
function because of an error claiming there is no "utf8" package. A helpful
hint that I found
[here](https://github.com/r-hub/rhub/issues/374#issuecomment-629350910)
says to run this instead.

```r
# Using rhub
rhub::check(
  platform = "windows-x86_64-devel",
  env_vars = c(R_COMPILE_AND_INSTALL_PACKAGES = "always")
    )

# Or using devtools
devtools::check_rhub(
  platform = "windows-x86_64-devel",
  env_vars = c(R_COMPILE_AND_INSTALL_PACKAGES = "always"))
```

Once those are complete, you can then use the following to submit to CRAN.

```r
devtools::release()
```

This will run automated checks and ask a series of questions making sure you've
performed a number of checks like the rhub check. Afterward, it
will automatically submits your package to CRAN.

## In sum

Above are some notes to me and others on how I created my {pixarfilms} R
package.

Here are useful resources I used and will refer back to are:

- [One page overview with great recommended packages](https://www.mzes.uni-mannheim.de/socialsciencedatalab/article/r-package/)
- [The R Packages book](https://r-pkgs.org/release.html) for reference
- [Dense one page checklist when updating your package](https://kalimu.github.io/post/checklist-for-r-package-submission-to-cran/)
