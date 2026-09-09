+++
title = "Unsupervised Concept Discovery Mitigates Spurious Correlations"
description = "Unsupervised object-centric concept discovery (CoBalT) mitigates spurious correlations without group annotation."
date = 2024-02-20

[taxonomies]
tags = ["icml 2024"]
+++

Unsupervised object-centric concept discovery (CoBalT) mitigates spurious correlations without group annotation.

[[arxiv]](https://arxiv.org/abs/2402.13368)
[[code]](https://github.com/rarefin/CoBalT)

<!-- more -->

Models prone to spurious correlations in training data often produce brittle predictions and introduce unintended biases. Addressing this challenge typically involves methods relying on prior knowledge and group annotation to remove spurious correlations, which may not be readily available in many applications. In this paper, we establish a novel connection between unsupervised object-centric learning and mitigation of spurious correlations. Instead of directly inferring subgroups with varying correlations with labels, our approach focuses on discovering concepts: discrete ideas that are shared across input samples. Leveraging existing object-centric representation learning, we introduce CoBalT: a concept balancing technique that effectively mitigates spurious correlations without requiring human labeling of subgroups. Evaluation across the benchmark datasets for sub-population shifts demonstrate superior or competitive performance compared state-of-the-art baselines, without the need for group annotation.

```bibtex
@inproceedings{
    arefin2024cobalt,
    author        = {Arefin, Md Rifat and Zhang, Yan and Baratin, Aristide and Locatello, Francesco and Rish, Irina and Liu, Dianbo and Kawaguchi, Kenji},
    title         = {Unsupervised Concept Discovery Mitigates Spurious Correlations},
    booktitle     = {International Conference on Machine Learning},
    year          = {2024},
    eprint        = {2402.13368},
    url           = {https://arxiv.org/abs/2402.13368}
}
```
