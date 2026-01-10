---
title: blog
layout: layouts/base_layout.html
---

<h2>Blog</h2>

<ul>
{% for post in collections.post %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>