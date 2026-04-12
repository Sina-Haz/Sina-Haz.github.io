# sina-haz.github.io

Personal portfolio site built with Jekyll. Live at https://sina-haz.github.io

---

## Deploy

```bash
git add -A && git commit -m "your message"
git push origin main && git push origin main:gh-pages
```

Both pushes required — `gh-pages` is what GitHub Pages serves.

---

## Common Tasks

### Change name / tagline / social links

Edit `_config.yml`:

```yaml
title: "Sina Hazeghi"
description: "your tagline"

author:
  name: "Sina Hazeghi"
  email: "shazeghian@gmail.com"

social:
  github: Sina-Haz
  linkedin: sina-hazeghi
```

### Update the About / Home page

Edit `index.md` — change the `<h1>` and `<p class="hero-sub">` text.

---

### Add a blog post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My Post Title"
date: 2025-06-01
excerpt: "One sentence summary shown in the blog list."
katex: true        # optional — enables math rendering
colab: "https://colab.research.google.com/..."  # optional
---

Write your post here in Markdown.

Inline math: $E = mc^2$

Display math:
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

### Add a project

Create a file in `_projects/` named `project-name.md`:

```markdown
---
title: "Project Name"
description: "One sentence description."
image: "/assets/img/your-image.png"   # or use video: for .mp4
github: "https://github.com/Sina-Haz/repo"
paper: "https://arxiv.org/abs/..."    # optional
tags: [python, deep-learning]
---
```

Drop image/video files in `assets/img/`.

For a short looping video instead of a static image:
```bash
# Speed up + compress a long .mp4 to ~2.5s (adjust setpts multiplier)
ffmpeg -i input.mp4 -filter:v "setpts=0.08*PTS,scale=800:-2" -an -crf 28 -preset fast output.mp4
```
Then use `video: "/assets/img/output.mp4"` in the front matter.

### Update an existing project

Edit the relevant file in `_projects/`. Fields:
- `title` — card heading
- `description` — card body text
- `image` or `video` — card thumbnail
- `github` — GitHub link
- `paper` — paper link (shows "Paper" button)
- `tags` — tag pills shown on card

---

## File Map

```
_config.yml          ← site-wide settings (name, URL, social links)
index.md             ← home / about page
blog.md              ← blog listing (auto-populated from _posts/)
projects.md          ← projects grid (auto-populated from _projects/)
contact.md           ← contact form (Formspree endpoint already set)
_posts/              ← blog posts as YYYY-MM-DD-title.md
_projects/           ← project cards as name.md
assets/img/          ← images and videos
assets/css/main.scss ← all styles (CSS custom properties for dark/light theme)
_layouts/            ← page templates (default, post, project)
_includes/           ← reusable partials (header, footer, katex)
```

---

## Dark / Light Mode

Toggle is in the nav. Preference saved in `localStorage`. Default is dark.

To change the default, edit `_layouts/default.html` line:
```html
<html lang="en" data-theme="dark">
```
Change `dark` to `light`.

---

## Local Preview

Requires Homebrew Ruby:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install        # first time only
bundle exec jekyll serve
```

Open http://localhost:4000
