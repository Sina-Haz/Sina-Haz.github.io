# Personal Portfolio Site — Static, GitHub Pages

## Stack
- **Jekyll** (GitHub Pages native, no build step)
- **Theme**: Minima or custom — clean dark/light minimal
- **LaTeX**: KaTeX (faster than MathJax) via CDN
- **Markdown rendering**: Jekyll native (Kramdown)
- **Contact**: Formspree (drop-in form, free tier)
- **Hosting**: GitHub Pages via `gh-pages` branch or `/docs` folder

---

## Site Structure

```
/
├── _config.yml
├── _layouts/
│   ├── default.html
│   ├── post.html
│   └── project.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── katex.html        # KaTeX script include
├── _posts/               # Blog posts as .md files
├── _projects/            # Project entries as .md files (Jekyll collection)
├── assets/
│   ├── css/main.scss
│   └── img/             # Project screenshots go here
├── index.md             # About Me (homepage)
├── blog.md              # Blog listing page
├── projects.md          # Projects listing page
└── contact.md           # Contact page
```

---

## Pages

### 1. Home / About (`index.md`)
- Short bio
- Profile photo (optional)
- Social links: GitHub, LinkedIn, Twitter/X — SVG icons (Simple Icons CDN)
- Links to Blog and Projects

### 2. Blog (`blog.md` + `_posts/`)
- Post list: title, date, excerpt
- Posts from Markdown
- KaTeX per-post via front matter `katex: true`
- KaTeX loads in `post.html` only when `page.katex == true`
- Jupyter/Colab: button/badge in front matter or inline
- Example:
  ```yaml
  ---
  layout: post
  title: "My First Post"
  date: 2025-01-01
  katex: true
  colab: "https://colab.research.google.com/..."   # optional
  ---
  ```

### 3. Projects (`projects.md` + `_projects/`)
- Jekyll collection: `_projects/`
- Each project `.md` front matter:
  ```yaml
  ---
  title: "Project Name"
  image: "/assets/img/project1.png"
  description: "One sentence description"
  github: "https://github.com/..."   # optional
  demo: "https://..."                # optional
  tags: [python, ML]
  ---
  ```
- Renders as card grid: image + title + description + links

### 4. Contact (`contact.md`)
- Formspree HTML form embedded
- Fields: Name, Email, Message, Submit
- Replace `YOUR_FORMSPREE_ID` in form action URL
- No backend — submissions go to email

---

## _config.yml (key settings)
```yaml
title: "Your Name"
description: "Brief tagline"
url: "https://yourusername.github.io"
baseurl: ""

plugins:
  - jekyll-feed
  - jekyll-seo-tag

collections:
  projects:
    output: false   # no individual project pages, just listed on projects.md

markdown: kramdown
highlighter: rouge

social:
  github: yourusername
  linkedin: yourusername
  twitter: yourusername
```

---

## KaTeX Setup (`_includes/katex.html`)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false}
    ]
  })">
</script>
```
Include in `post.html`: `{% if page.katex %}{% include katex.html %}{% endif %}`

---

## Formspree Contact Form
```html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="_replyto" placeholder="Email" required>
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>
```
Create free Formspree account → get form ID → replace placeholder.

---

## GitHub Pages Deployment
1. Push repo to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Live at `https://yourusername.github.io` in ~2 min
4. No build step — GitHub runs Jekyll automatically

---

## Claude Code Prompt

Paste into Claude Code after placing spec in project folder:

```
Read SPEC.md and build the complete Jekyll portfolio site exactly as specified.

Requirements:
- Implement all pages: index, blog listing, projects grid, contact
- Create _layouts/default.html, post.html; _includes/header.html, footer.html, katex.html
- Create _config.yml with placeholder values (name, username, Formspree ID as TODO comments)
- Create _projects/ collection with 2 placeholder project .md files
- Create _posts/ with 1 placeholder post that uses KaTeX (show inline $E=mc^2$ and display block math)
- Style: clean, minimal, mobile-responsive — dark mode preferred
- Social icons in header/footer using inline SVG or Simple Icons
- No npm, no webpack, no build tools — pure Jekyll + CDN assets only
- After generating, list every TODO item the user must fill in (name, Formspree ID, etc.)
```