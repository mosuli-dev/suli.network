---
title: Tags
layout: layouts/tags_layout.html
---

<h1>Tags</h1>

<ul>
{% assign tagSet = "" | split: "," %}

{% for post in collections.post %}
  {% for tag in post.data.tags %}
    {% assign tagSet = tagSet | push: tag %}
  {% endfor %}
{% endfor %}

{% assign uniqueTags = tagSet | uniq | sort %}

{% for tag in uniqueTags %}
  <li>
    <a href="/tags/{{ tag }}/">{{ tag }}</a>
  </li>
{% endfor %}
</ul>

<p>Total blog posts: {{ collections.post | size }}</p>