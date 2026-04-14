---
layout: post
title: "Score Models on 1D Distributions (JAX)"
date: 2025-03-01
colab: "https://colab.research.google.com/drive/15QfPW4dVS1O48nvkYP0umIw01ryYKC6v?usp=sharing"
image: "/assets/img/gen_modelling.png"
excerpt: "Trains score-based generative models on simple 1D distributions in JAX. Covers score matching, Langevin dynamics sampling, and the connection to diffusion."
---

Trains score-based generative models on hand-crafted 1D distributions — a minimal setting that makes the math transparent. Built entirely in JAX with Flax.

![Score model outputs](/assets/img/gen_modelling.png)

Key ideas covered:

- **Score matching**: learning ∇log p(x) without computing the partition function
- **Denoising score matching**: the practical training objective via noise perturbations
- **Langevin dynamics**: sampling from the learned score using stochastic gradient ascent
- **Connection to diffusion**: how iterative denoising emerges from score estimation
