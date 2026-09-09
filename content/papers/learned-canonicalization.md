+++
title = "Equivariance with Learned Canonicalization Functions"
date = 2022-11-11

[taxonomies]
tags = ["icml 2023"]
+++

Make models equivariant by learning to map data to canonical examples.

[[arxiv]](https://arxiv.org/abs/2211.06489)

<!-- more -->

Symmetry-based neural networks often constrain the architecture in order to achieve invariance or equivariance to a group of transformations. In this paper, we propose an alternative that avoids this architectural constraint by learning to produce canonical representations of the data. These canonicalization functions can readily be plugged into non-equivariant backbone architectures. We offer explicit ways to implement them for some groups of interest. We show that this approach enjoys universality while providing interpretable insights. Our main hypothesis, supported by our empirical results, is that learning a small neural network to perform canonicalization is better than using predefined heuristics. Our experiments show that learning the canonicalization function is competitive with existing techniques for learning equivariant functions across many tasks, including image classification, $N$-body dynamics prediction, point cloud classification and part segmentation, while being faster across the board.

```bibtex
@inproceedings{
    kaba2023canonicalization,
    author        = {Kaba, S\'{e}kou-Oumar and Mondal, Arnab Kumar and Zhang, Yan and Bengio, Yoshua and Ravanbakhsh, Siamak},
    title         = {Equivariance with Learned Canonicalization Functions},
    booktitle     = {International Conference on Machine Learning},
    year          = {2023},
    eprint        = {2211.06489},
    url           = {https://proceedings.mlr.press/v202/kaba23a.html}
}
```
