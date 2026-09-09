+++
title = "Learning representations of sets through optimized permutations"
date = 2018-12-10

[taxonomies]
tags = ["iclr 2019"]
+++

Learn how to permute a set, then encode permuted set with RNN to obtain a set representation.

[[arxiv]](https://arxiv.org/abs/1812.03928)
[[code]](https://github.com/Cyanogenoid/perm-optim)
[[poster]](/files/l2p-poster.pdf)

<!-- more -->

Representations of sets are challenging to learn because operations on sets should be permutation-invariant. To this end, we propose a Permutation-Optimisation module that learns how to permute a set end-to-end. The permuted set can be further processed to learn a permutation-invariant representation of that set, avoiding a bottleneck in traditional set models. We demonstrate our model's ability to learn permutations and set representations with either explicit or implicit supervision on four datasets, on which we achieve state-of-the-art results: number sorting, image mosaics, classification from image mosaics, and visual question answering. 

```bibtex
@inproceedings{
    zhang2018permoptim,
    title         = {Learning Representations of Sets through Optimized Permutations},
    author        = {Yan Zhang and Jonathon Hare and Adam Pr\"ugel-Bennett},
    booktitle     = {International Conference on Learning Representations},
    year          = {2019},
    url           = {https://openreview.net/forum?id=HJMCcjAcYX},
}
```