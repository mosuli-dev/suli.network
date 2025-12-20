---
layout: template.html
title: zines.
eleventyExcludeFromCollections: ["zine"]
---
<ul>
{%- for zine in collections.zine -%}
  <li>
     <h3> 
        <a href="{{ zine.url }}"> {{ zine.data.title }} </a> 
     </h3>
  </li>
{%- endfor -%}
</ul>