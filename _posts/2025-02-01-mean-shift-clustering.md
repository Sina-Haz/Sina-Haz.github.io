---
layout: post
title: "Mean Shift Clustering & K-D Trees"
date: 2025-02-01
colab: "https://colab.research.google.com/drive/1-0hLmn79l2W5mojGTGjZ-pPhtFl_syTk?usp=sharing"
image: "/assets/img/kdtree.png"
excerpt: "Implements mean shift clustering from scratch, with k-d trees for fast neighbor queries and GPU batching for efficient density estimation over large point sets."
---

Implements mean shift clustering from scratch — iteratively shifting each point toward the local density maximum until convergence. K-d trees accelerate the neighbor lookups needed for kernel density estimation, and GPU batching makes the bandwidth search tractable over large point sets.

![K-D tree partitioning](/assets/img/kdtree.png)

Key ideas covered:

- **Mean shift**: kernel density gradient ascent, no cluster count needed
- **K-D trees**: spatial partitioning for O(log n) range queries
- **GPU batching**: parallelizing the shift updates across the full dataset
