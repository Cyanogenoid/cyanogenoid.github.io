+++
title = "FSPool: Learning set representations with featurewise sort pooling"
date = 2019-06-06

[taxonomies]
tags = ["iclr 2020"]
+++

Sort in encoder and undo sorting in decoder to avoid responsibility problem in set auto-encoders.

[[arxiv]](https://arxiv.org/abs/1906.02795)
[[code]](https://github.com/Cyanogenoid/fspool)
[[video]](https://iclr.cc/virtual_2020/poster_HJgBA2VYwH.html)
[[poster]](/files/dspn-workshop-poster.pdf)

<!-- more -->

Traditional set prediction models can struggle with simple datasets due to an issue we call the responsibility problem. We introduce a pooling method for sets of feature vectors based on sorting features across elements of the set. This can be used to construct a permutation-equivariant auto-encoder that avoids this responsibility problem. On a toy dataset of polygons and a set version of MNIST, we show that such an auto-encoder produces considerably better reconstructions and representations. Replacing the pooling function in existing set encoders with FSPool improves accuracy and convergence speed on a variety of datasets. 

```bib
@inproceedings{
    zhang2019fspool,
    author        = {Yan Zhang and Jonathon Hare and Adam Pr\"ugel-Bennett},
    title         = {{FSPool}: Learning Set Representations with Featurewise Sort Pooling},
    booktitle     = {International Conference on Learning Representations},
    year          = {2020},
    eprint        = {1906.02795},
    url           = {https://openreview.net/forum?id=HJgBA2VYwH}
}
```