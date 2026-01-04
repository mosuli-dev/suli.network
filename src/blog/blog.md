---
title: blog
layout: layouts/base_layout.html
eleventyExcludeFromCollections: ["post"]
---

<h1>Blog</h1>

<ul>
{% for post in collections.blog %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>— {{ post.date }}</small>
  </li>
{% endfor %}
</ul>
