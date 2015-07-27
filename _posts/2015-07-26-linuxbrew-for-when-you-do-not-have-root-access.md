---
layout: post
title: Linuxbrew - For When You Do Not Have Root Access
---

I have access to a Linux server, but I inconveniently do not have any root
access. This means that installing software was a bit of a pain, because I could
not use the usual `apt-get` command. Luckily, after many months of not using the
server because I do not have root access, I have found the solution: Linuxbrew.

Paste this into your terminal and it will install Linuxbrew.
{% highlight ruby %}
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"
{% endhighlight %}

If you are familiar with [homebrew](http://brew.sh/) from Mac OSX, this is just
a port over to Linux to be your local package manager. 

Additional steps to make this work are to add the following to your `.bashrc`
file.

{% highlight bash %}
export PATH="$HOME/.linuxbrew/bin:$PATH"
export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"
export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH"
{% endhighlight %}

Afterward, you can start installing away with the following command.

{% highlight bash %}
brew install package_name
{% endhighlight %}

For example, I wanted to use the console-based client for Pandora called
[pianobar](http://6xq.net/pianobar/), so I ran the following command.

{% highlight bash %}
brew install pianobar
{% endhighlight %}

You can find more documentation [here](http://brew.sh/linuxbrew/).
