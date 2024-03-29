# [erictleung.github.io](https://erictleung.github.io)

Herein lies the source code of my website.

**Table of Contents**

- [Prerequisites](#prerequisites)
- [Installation and Starting](#installation-and-starting)
- [Modified Theme](#modified-theme)
- [Inserting images](#inserting-images)
- [Other](#other)
- [License](#license)


## Prerequisites

Jekyll sites require Ruby (>= 2.2.5).

See [guides][guides] on installation.  Here's an example:

```shell
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Now install software.

```shell
gem install jekyll
gem install bundler
```

More information on using Jekyll and GitHub Pages can be found
[here][github_jekyll]. GitHub Pages has a list of their dependencies that can
be found [here][github_prereqs].

[guides]: https://jekyllrb.com/docs/installation/#guides
[github_jekyll]: https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/
[github_prereqs]: https://pages.github.com/versions/


## Installation and Starting

```shell
# Setup
git clone https://github.com/erictleung/erictleung.github.io.git
cd erictleung.github.io
bundle install # Install dependencies

# Serve live site
bundle exec jekyll serve

# Serve site with draft blog posts
# https://jekyllrb.com/docs/drafts/
bundle exec jekyll serve --drafts
```

You can find more information about the static site generator, Jekyll,
[here][jekyll]. Jekyll uses various syntax to help template information, so
[here][jekyllcheat] is a Jekyll cheat sheet.

[jekyll]: http://jekyllrb.com/docs/home/
[jekyllcheat]: https://learn.cloudcannon.com/jekyll-cheat-sheet/


## Modified Theme

The theme for the site is modified from [lanyon][lanyon]. A short description
of it is:

> Lanyon is an unassuming [Jekyll](http://jekyllrb.com) theme that places
> content first by tucking away navigation in a hidden drawer. It's based on
> [Poole](http://getpoole.com), the Jekyll butler.

[lanyon]: https://github.com/poole/lanyon


### Inserting Images

I've created a small shortcut to help embed images more semantically.

```html
{% include image.html
   url="asset/image_path_here.jpg"
   alt="Put alt text here"
   caption="This is the caption for the image"
%}
```


## Other

Jekyll uses the [Liquid](https://shopify.github.io/liquid/) templating system
to inject some programming logic into some of the HTML elements. See its
documentation page for more on how to use it in Jekyll.


## License

MIT
