---
layout: post
title: "Convolutions & CNNs with fastai"
date: 2025-03-15
colab: "https://colab.research.google.com/drive/1wYs7JOC2MAsIjX31dxeDCduq2WasZSsk?usp=sharing"
image: "/assets/img/convolution.gif"
excerpt: "A ground-up tour of convolutions — from the raw operation to building and training CNNs using fastai. Covers filters, padding, stride, pooling, and receptive fields."
---

A ground-up tour of convolutions and how they compose into CNNs. Uses fastai to cut boilerplate so the focus stays on the concepts.

![2D convolution sliding window](/assets/img/convolution.gif)

Key ideas covered:

- **The convolution operation**: sliding kernels, dot products, feature maps
- **Filters as feature detectors**: edges, textures, and learned representations
- **Padding & stride**: controlling output dimensions and downsampling
- **Pooling**: spatial invariance and dimensionality reduction
- **Receptive fields**: how deep layers see larger regions of the input
- **Training a CNN**: end-to-end with fastai's training loop
