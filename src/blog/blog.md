---
title: blog
layout: layouts/base_layout.html
---

<h1>Blog</h1>

<ul>
{% for post in collections.post %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>{{ post.date | date: "%m-%d-%y" }}</small>
  </li>
{% endfor %}
</ul>