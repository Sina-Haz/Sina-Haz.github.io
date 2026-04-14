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

  {% assign notebook_posts = site.posts | where_exp: "p", "p.colab" %}
  {% assign regular_posts = site.posts | where_exp: "p", "p.colab == nil" %}

  <section class="blog-section">
    <div class="blog-section-header">
      <h2 class="blog-section-title">Notebooks</h2>
      <p class="blog-section-desc">Interactive notebooks — open directly in Google Colab to run and explore.</p>
    </div>
    <ul class="post-list">
      {% for post in notebook_posts %}
      <li class="post-item post-item--nb">
        {% if post.image %}
        <img class="post-thumb" src="{{ post.image | relative_url }}" alt="{{ post.title }}">
        {% endif %}
        <div class="post-item-body">
          <div class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
            &nbsp;·&nbsp;
            <a href="{{ post.colab }}" class="colab-badge" target="_blank" rel="noopener">Open in Colab</a>
          </div>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          {% if post.excerpt %}
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>
          {% endif %}
        </div>
      </li>
      {% else %}
      <li class="post-item">
        <p class="post-excerpt">No notebooks yet. Add a post with <code>colab: https://...</code> in the front matter.</p>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="blog-section">
    <div class="blog-section-header">
      <h2 class="blog-section-title">Writing</h2>
    </div>
    <ul class="post-list">
      {% for post in regular_posts %}
      <li class="post-item">
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
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
  </section>
</div>
