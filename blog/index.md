---
layout: page
title: Blog
---

## Writings

<ul class="posts">
  {% for post in site.posts %}
  <li><span>{{ post.date | date: "%Y-%m-%d"}}</span>
      &raquo;
      <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>

