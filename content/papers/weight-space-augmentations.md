+++
title = "Improved Generalization of Weight Space Networks via Augmentations"
date = 2024-02-06

[taxonomies]
tags = ["icml 2024"]
+++

Weight-space MixUp and augmentations fix overfitting of networks that operate on other networks' weights.

[[arxiv]](https://arxiv.org/abs/2402.04081)

<!-- more -->

Learning in deep weight spaces (DWS), where neural networks process the weights of other neural networks, is an emerging research direction, with applications to 2D and 3D neural fields (INRs, NeRFs), as well as making inferences about other types of neural networks. Unfortunately, weight space models tend to suffer from substantial overfitting. We empirically analyze the reasons for this overfitting and find that a key reason is the lack of diversity in DWS datasets. While a given object can be represented by many different weight configurations, typical INR training sets fail to capture variability across INRs that represent the same object. To address this, we explore strategies for data augmentation in weight spaces and propose a MixUp method adapted for weight spaces. We demonstrate the effectiveness of these methods in two setups. In classification, they improve performance similarly to having up to 10 times more data. In self-supervised contrastive learning, they yield substantial 5-10% gains in downstream classification.

```bibtex
@inproceedings{
    shamsian2024weightspace,
    author        = {Shamsian, Aviv and Navon, Aviv and Zhang, David W and Zhang, Yan and Fetaya, Ethan and Chechik, Gal and Maron, Haggai},
    title         = {Improved Generalization of Weight Space Networks via Augmentations},
    booktitle     = {International Conference on Machine Learning},
    year          = {2024},
    eprint        = {2402.04081},
    url           = {https://arxiv.org/abs/2402.04081}
}
```
