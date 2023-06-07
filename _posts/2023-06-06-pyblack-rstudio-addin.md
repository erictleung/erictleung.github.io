---
layout: post
title: How I created an RStudio addin, pyblack, to format Python code with black
categories: [tools]
tags: [rstudio, rstats, tools, addin, python, linting]
---

I recently created a small (toy) project called
[pyblack](https://github.com/erictleung/pyblack). It helps format your Python
code in RStudio with the popular formatter,
[black](https://github.com/psf/black).

This started out with writing Python code in RStudio and wanting to format it,
specifically in RMarkdown and Quarto code chunks. With R, RStudio has a built-in
formatter, namely [{styler}](https://github.com/r-lib/styler/). I wanted a
similar tool for Python, so here is a little behind the scenes on how I did this.

I actually created another RStudio addin called
[unnestIfElse](https://github.com/erictleung/unnestIfElse/) to help
automatically convert long nested `ifelse()` statements to a nicer
`dplyr::case_when()`.

I didn't write my thoughts about it previously like I am with this addin, but
looking at my comments, I may have inspiration from
[AlignAssign](https://github.com/seasmith/AlignAssign). This addin aligns
assignment operators within a highlighted area.

Regardless, I have up to two places to draw code from that do what I want.
Namely, I want some code to help take code from some highlighted area and then
change it.

The first important function to learn about is the `getSourceEditorContext()`
function. It comes from the
[{rstudioapi}](https://rstudio.github.io/rstudioapi/) R package[^1] and
can extract highlighted text into an object.

```r
capture <- rstudioapi::getSourceEditorContext()
```

This returns a nested list with, among other things, the selected text from an
editor. This is progress.

After some exploration, I found that I could get the correct text using
this[^2]:

```r
code <-
    capture %>%
    magrittr::extract2("selection") %>%
    magrittr::extract2(1) %>%
    magrittr::extract2("text")
```

Next, I needed to figure out how to take this code and format it using black.

Using the `system2()` function, I can have R call system commands.

After some troubleshooting, I figured out how to also specify a `pyproject.toml`
file for black to reference when following custom user configuration.

So I finally did enough troubleshooting to translate this

```shell
black -v --config ~/path/to/pyproject.toml file_to_format.py
```

to this

```r
system2(
  "black",
  c(
    "-v",
    "--config ~/path/to/pyproject.toml",
    "file_to_format.py"
  )
)
```

I added the `-v` for future troubleshooting ease[^3].

Now how do I get to `file_to_format.py`? I found another example of prettifying
code using [prettifyAddins](https://github.com/stla/prettifyAddins). At first
glance, this would have done the job. But this only apply black to Python files.
I wanted a way to format Python code chunks in RMarkdown.

But what I did get from this addin is the idea to write out the extracted code
to a temporary file to be formatted.

```r
tmpFile <- tempfile(fileext = ".py")
writeLines(code, tmpFile)
```

I got some feedback that if there are lots of code blocks, there will be lots of
input/output writing that can cause things to slow down. Unfortunately, I
couldn't find a way to cleanly stream code directly to black without dealing with
a long-troubleshooting-with-escaping-quotes headache[^4].

Now after styling with black, I can reinject the code using this code here.

```r
contents <- style_black(code)
studioapi::modifyRange(
  location = capture[["selection"]][[1]][["range"]],
  text = contents,
  id = capture[["id"]])
```

This pulls the location metadata from the initial source context when we
extracted the text from the editor.

All is well. My initial goal is done. But I got challenged to see if I could then
apply this formatting on all Python code chunks in an RMarkdown or Quarto
document.

Based on how I have been extracting code and replacing it, I expected a world of
hurt from a number of `for` loops and making sure I was tracking code positions
correctly[^5].

Thanks to [Alex](https://github.com/rossellhayes), they gave me code similar to
the below that solves just this.

```r
document <- parsermd::parse_rmd(file, parse_yaml = FALSE)

document <- purrr::modify_if(
  document,
  .p = function(chunk) {
    inherits(chunk, "rmd_chunk") &&
      identical(chunk$engine, "python") &&
      # Check whether code chunk explicitly says `black = FALSE`
      ifelse(is.null(chunk$options$black),
             TRUE,
             as.logical(chunk$options$black))
  },
  .f = function(chunk) {
    chunk$code <- style_black(chunk$code)
    chunk
  }
)

writeLines(parsermd::as_document(document), file)
```

I was mostly unfamiliar with the functions here, but ultimately, this makes use
of the [{parsermd}](https://github.com/rundel/parsermd) R package. This package
parsed the Markdown-like document into an abstract-syntax tree (AST) to then be
manipulated programmatically[^6].

With that complete, I now have two ways to format Python code:

1. Style selected code that I highlighted
2. Style all Python code blocks in an entire RMarkdown/Quarto document

The last step is to then specify my functions in `inst/rstudio/addins.dcf` so
that RStudio knows these are addins like below.

```
Name: Style selection with black
Description: Style selected Python code with black
Binding: style_black_selection
Interactive: true

Name: Style active file with black
Description: Style active RMarkdown or Quarto Python code blocks with black
Binding: style_active_file_black
Interactive: true
```

In conclusion, I hope you've enjoyed learning a bit on how to programmatically
manipulate text in RStudio and now have a reference for if you too want to create
your own RStudio addin. Here is the project again if you want to take a look order
try it for yourself
[https://github.com/erictleung/pyblack](https://github.com/erictleung/pyblack).

[^1]: ICYMI Posit has an API to programmatically access RStudio!

[^2]: I like to use these convenient {magrittr} functions besides the `%>%`

[^3]: This returns more verbose stdout and stderr when formatting

[^4]: This only works for simple examples like
    `black --code "print ( 'hello, world' )"`

[^5]: This especially gets messy when injecting new code that will then change
    the initial text positions. Sounds like some recursive programming that I don't
    want to get into.

[^6]: This package is magic. I want to learn what more I can do with this later.
