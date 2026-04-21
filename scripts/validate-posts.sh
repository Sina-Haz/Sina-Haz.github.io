#!/bin/bash
# Validate all posts/projects have correct layouts

echo "Validating post/project layouts..."
missing=0

for file in _posts/*.md _projects/*.md; do
  [ -f "$file" ] || continue
  if ! grep -q "^layout:" "$file"; then
    echo "❌ $file missing layout directive"
    ((missing++))
    continue
  fi
  layout=$(grep "^layout:" "$file" | head -1 | cut -d: -f2 | xargs)
  if [ "$layout" != "post" ] && [ "$layout" != "project" ]; then
    echo "❌ $file has unexpected layout: $layout"
    ((missing++))
    continue
  fi
  echo "✓ $file"
done

if [ $missing -eq 0 ]; then
  echo ""
  echo "✅ All posts/projects have correct layouts"
  echo "License footer auto-applies via _layouts/post.html and _layouts/project.html"
  exit 0
else
  echo ""
  echo "❌ Found $missing files with layout issues"
  exit 1
fi
