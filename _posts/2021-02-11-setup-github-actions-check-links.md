---
layout: post
title: Setup GitHub Actions to validate repository links
categories: [github]
tags: [automation]
---

I think there's a movement to move some continuous integration from
[Travis CI to GitHub Actions](https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=Travis%20CI,GitHub%20Actions).

So here's a post on how I converted one of my repositories, first by reviewing
some of the GitHub interfaces and then creating it through the terminal.

So my repository
[awesome-nosql-guides](https://github.com/erictleung/awesome-nosql-guides/)
has a tab labeled
["Actions"](https://github.com/erictleung/awesome-nosql-guides/actions).

Going there, you're shown a screen talking about workflows here and there. If
you haven't set one of these up, this page should be mostly blank.

There is a handy workflow template that GitHub starts up for you if you click
on "New Workflow". Although it will be unaccessible for you, my new workflow
link would look like this:

```
https://github.com/erictleung/awesome-nosql-guides/actions/new
```

There is also a
[Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart)
available.

But going through and creating this workflow, I found this page
["Workflow syntax for GitHub Actions"](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
the most useful. The documentation is very clear on what is what once you get
used to reading [YAML syntax](https://yaml.org/).

From the terminal, you'll need to create a folder called `workflows/` within
the `.github/` directory. If you're in the root of your project, you can run
this.

```sh
# Create folders and parent directories as needed
mkdir -p .github/workflows
```

Within the `workflows/` directory, this is where you'll create your workflows.
Essentially, this is where all your translated `.travis.yml` configurations
will go.

Here's an annotated GitHub Action I set up.

```yaml
# Name of your workflow that GitHub displays
name: Check Resources

# Name of GitHub event that activates the workflow (required)
on: [push,pull_request]

# List of jobs to be run for workflow
jobs:
  # Name of job
  validate_links:
    name: Validate links  # optional
    runs-on: ubuntu-latest  # type of machine to run on
    steps:
      # These below are published Docker container images under `uses`
      - name: Checkout source files
        uses: actions/checkout@v2

      - name: Setup Ruby 2.6
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.6.x

      # You can also run your custom commands if no published action exists
      - name: Run checks on links
        run: |
          gem install awesome_bot
          awesome_bot --allow-ssl --allow 302,429 --allow-dupe -f README.md
```

Here is a list of
[operating systems](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)
you can place within `jobs.<job_id>.runs-on` option above.

You can take a look at more GitHub Actions on this
[Awesome-Actions](https://github.com/sdras/awesome-actions)
page with a curated list of great things you can do with GitHub Actions. I hope
to make use of this feature more in the future.
