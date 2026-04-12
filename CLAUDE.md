# Personal Website — Claude Notes

## Deploy Command
Every push requires updating both branches:
```bash
git push origin main && git push origin main:gh-pages
```
Pages reads from `gh-pages`. Forgetting the second push = live site won't update.

## Stack
Jekyll 4 + GitHub Pages. No build step locally needed for deploy — GitHub runs Jekyll automatically on push.

## Local Preview
```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve
# open http://localhost:4000
```
