+++
title = "Multiset-equivariant set prediction with approximate implicit differentiation"
date = 2022-04-25

[taxonomies]
tags = ["iclr 2022"]
+++

A better permutation-equivariance property for set prediction.

[[arxiv]](https://arxiv.org/abs/2111.12193)
[[code]](https://github.com/davzha/multiset-equivariance)

<!-- more -->

Most set prediction models in deep learning use set-equivariant operations, but they actually operate on multisets. We show that set-equivariant functions cannot represent certain functions on multisets, so we introduce the more appropriate notion of multiset-equivariance. We identify that the existing Deep Set Prediction Network (DSPN) can be multiset-equivariant without being hindered by set-equivariance and improve it with approximate implicit differentiation, allowing for better optimization while being faster and saving memory. In a range of toy experiments, we show that the perspective of multiset-equivariance is beneficial and that our changes to DSPN achieve better results in most cases. On CLEVR object property prediction, we substantially improve over the state-of-the-art Slot Attention from 8% to 77% in one of the strictest evaluation metrics because of the benefits made possible by implicit differentiation. 

```bib
@inproceedings{
    zhang2022multisetequivariant,
    title={Multiset-Equivariant Set Prediction with Approximate Implicit Differentiation},
    author={Zhang, Yan and Zhang, David W and Lacoste-Julien, Simon and Burghouts, Gertjan J and Snoek, Cees GM},
    booktitle={International Conference on Learning Representations},
    year={2022},
    url={https://openreview.net/forum?id=5K7RRqZEjoS}
}
```
