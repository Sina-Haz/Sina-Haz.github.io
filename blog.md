---
layout: default
title: "Blog"
description: "Writing on research, engineering, and ideas."
permalink: /blog/
---

<div class="container">
  <header class="page-header">
    <h1>Blog</h1>
    <p>Writing on research, engineering, and ideas.</p>
  </header>

  <ul class="post-list">
    {% for post in site.posts %}
    <li class="post-item">
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
        {% if post.colab %}
        &nbsp;·&nbsp;
        <a href="{{ post.colab }}" class="colab-badge" target="_blank" rel="noopener">Open in Colab</a>
        {% endif %}
      </div>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.excerpt %}
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
    </li>
    {% else %}
    <li class="post-item">
      <p class="post-excerpt">No posts yet. Add <code>.md</code> files to <code>_posts/</code>.</p>
    </li>
    {% endfor %}
  </ul>
</div>
