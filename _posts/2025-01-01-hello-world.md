---
layout: post
title: "Hello World — A Sample Post with Math"
date: 2025-01-01
katex: true
excerpt: "A demo post showing KaTeX math rendering. Inline math and display math both work out of the box."
# colab: "https://colab.research.google.com/..."  # uncomment and add link if needed
---

This is a placeholder post. Replace this with your own writing.

## Inline Math

Einstein's famous equation $E = mc^2$ relates energy and mass. The quadratic formula gives us $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

## Display Math

The Gaussian integral:

$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$

Bayes' theorem:

$$P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}$$

## Code

```python
import numpy as np

def gaussian(x, mu=0, sigma=1):
    return np.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * np.sqrt(2 * np.pi))
```

## Writing

Replace this content with your actual post. To enable KaTeX, set `katex: true` in front matter. To link a Colab notebook, uncomment the `colab:` field above.
