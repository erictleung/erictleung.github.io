---
layout: post
title: Openxlsx in R to Write Excel Files
---

Use the `openxlsx` to write data analysis results to Excel files.

<!--break-->

In biology, Microsoft Excel is still used a lot, despite [errors using default
settings][excel-gene] and lack of reproducible analyses. Nonetheless, it is
still widely used in biology and elsewhere.

Recently, I needed to make an Excel file and found myself copy-pasting a lot of
results from R. In that moment, I sought to find a better, programmatic way of
copying content over. And the answer is using the `openxlsx` package.

[excel-gene]: http://dx.doi.org/10.1186/s13059-016-1044-7

## Download and load package

In R, you can download and install the package with the following code.

```r
# Install package
install.packages("openxlsx")

# Load newly installed library
library(openxlsx)
```

What I like this package over the others, like [`xlsx`][xlsx] and
[`WriteXLS`][writexls], is that it [doesn't rely on Java or Perl][so-xlsx]. This
can be an issue if, for some reason, you don't have administrative privileges.

[openxlsx]: https://cran.r-project.org/package=openxlsx
[xlsx]: https://cran.r-project.org/package=xlsx
[writexls]: https://cran.r-project.org/package=WriteXLS
[so-xlsx]: https://stackoverflow.com/questions/19414605#comment64546415_19428495

## Writing data to Excel files

A quick easy way to write out files is using the `write.xlsx()` function like
so.

```r
# Common datasets found in R
ds <- list(iris = iris, mtcars = mtcars, chickwts = chickwts, quakes = quakes)

# Write to Excel file
write.xlsx(x = ds, file = "datasets.xlsx")
```

This will put each item in the list as its own sheet in the specified Excel
sheet.

## Conclusion

If you need to deal with Excel sheets with others, consider using
[`openxlsx`][openxlsx] to make your results reproducible and automated. This
way, if you need to redo an analysis, all you need to do is rerun the code and
it will generate a format that others are familiar with.

Now, for Microsoft Powerpoint files, [ReporteRs][reporter] looks promising.

[reporter]: http://davidgohel.github.io/ReporteRs/index.html
