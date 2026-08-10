---
layout: default
title: "CV"
description: "My curriculum vitae."
permalink: /cv/
---

<div class="container">
  <header class="page-header">
    <h1>CV</h1>
    <p>My curriculum vitae — click below to view or download.</p>
  </header>

  {% assign cv_file = site.static_files | where: "path", "/assets/cv/resume.pdf" | first %}
  {% if cv_file %}
  <a href="{{ '/assets/cv/resume.pdf' | relative_url }}" target="_blank" rel="noopener" class="btn btn-primary">Download CV (PDF)</a>
  {% else %}
  <p>CV not uploaded yet. Check back soon.</p>
  {% endif %}
</div>