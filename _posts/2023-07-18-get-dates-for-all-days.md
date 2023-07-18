---
layout: post
title: Get all dates for a day of the week
categories: [rstats]
tags: [dates, lubridate]
---

For some date-specific work, I wanted to get a list of all dates in the year, for a specific day of the week. Here is how I did this using R.

Using {lubridate}, the pseudocode is:

- get a list of all days in the year,
- convert dates into day of the week, and
- pull all of that date into a vector

```r
# Setup
library(lubridate)
library(dplyr)

# Get all days in the year
all_year <- ymd(20230101) + days(1:364)

# Get all Mondays
data.frame(date = all_year) %>%
  mutate(dow = wday(date)) %>%
  filter(dow == 1) %>%  # Get all Sundays
  pull(date)
```

```
 [1] "2023-01-01" "2023-01-08" "2023-01-15" "2023-01-22"
 [5] "2023-01-29" "2023-02-05" "2023-02-12" "2023-02-19"
 [9] "2023-02-26" "2023-03-05" "2023-03-12" "2023-03-19"
[13] "2023-03-26" "2023-04-02" "2023-04-09" "2023-04-16"
[17] "2023-04-23" "2023-04-30" "2023-05-07" "2023-05-14"
[21] "2023-05-21" "2023-05-28" "2023-06-04" "2023-06-11"
[25] "2023-06-18" "2023-06-25" "2023-07-02" "2023-07-09"
[29] "2023-07-16" "2023-07-23" "2023-07-30" "2023-08-06"
[33] "2023-08-13" "2023-08-20" "2023-08-27" "2023-09-03"
[37] "2023-09-10" "2023-09-17" "2023-09-24" "2023-10-01"
[41] "2023-10-08" "2023-10-15" "2023-10-22" "2023-10-29"
[45] "2023-11-05" "2023-11-12" "2023-11-19" "2023-11-26"
[49] "2023-12-03" "2023-12-10" "2023-12-17" "2023-12-24"
[53] "2023-12-31"
```

The `wday()` function defaults to Sunday being 1.
This can be changed by setting the `week_start` parameter to another day of the week.

For example, this is how you'd make the week start on Monday.

```
# Start beginning of week on a Monday
wday("2023-07-18", week_start = 1)  # This date is a Tuesday
# [1] 2

# Defaults to Sunday being beginning of the week
wday("2023-07-18")
# [1] 3
```
