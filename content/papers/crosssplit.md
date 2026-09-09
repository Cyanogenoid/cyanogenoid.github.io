+++
title = "CrossSplit: Mitigating Label Noise Memorization through Data Splitting"
description = "Improve robust learning under label noise by reducing memorization of noisy labels using a novel training framework."
date = 2022-12-03

[taxonomies]
tags = ["icml 2023"]
+++

Improve robust learning under label noise by reducing memorization of noisy labels using a novel training framework.

[[arxiv]](https://arxiv.org/abs/2212.01674)

<!-- more -->

We approach the problem of improving robustness of deep learning algorithms in the presence of label noise. Building upon existing label correction and co-teaching methods, we propose a novel training procedure to mitigate the memorization of noisy labels, called CrossSplit, which uses a pair of neural networks trained on two disjoint parts of the labelled dataset. CrossSplit combines two main ingredients: (i) Cross-split label correction. The idea is that, since the model trained on one part of the data cannot memorize example-label pairs from the other part, the training labels presented to each network can be smoothly adjusted by using the predictions of its peer network; (ii) Cross-split semi-supervised training. A network trained on one part of the data also uses the unlabeled inputs of the other part. Extensive experiments on CIFAR-10, CIFAR-100, Tiny-ImageNet and mini-WebVision datasets demonstrate that our method can outperform the current state-of-the-art in a wide range of noise ratios.

{% raw %}
```bibtex
@inproceedings{
    kim2023crosssplit,
    author        = {Kim, Jihye and Baratin, Aristide and Zhang, Yan and Lacoste-Julien, Simon},
    title         = {{C}ross{S}plit: Mitigating Label Noise Memorization through Data Splitting},
    booktitle     = {International Conference on Machine Learning},
    year          = {2023},
    eprint        = {2212.01674},
    url           = {https://proceedings.mlr.press/v202/kim23a.html}
}
```
{% endraw %}
