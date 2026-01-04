---
layout: layouts/base_layout.html
title: projects
eleventyExcludeFromCollections: ["work"]
---
<h2>projects.</h2>
<ul>
    {% for work in collections.work %}
        <li>
            <h2><a href="{{ work.url }}"> {{ work.data.title }}</a></h2>
            <p> {{ post.content }}</p>
        </li>
    {% endfor %}
</ul>