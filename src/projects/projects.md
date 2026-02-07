---
title: Projects
layout: layouts/base_layout.html
eleventyExcludeFromCollections: ["work"]
---
<h2>Projects</h2>
<ul>
    {% for work in collections.work %}
        <li>
            <h2><a href="{{ work.url }}"> {{ work.data.title }}</a></h2>
            <p> {{ post.content }}</p>
        </li>
    {% endfor %}
</ul>