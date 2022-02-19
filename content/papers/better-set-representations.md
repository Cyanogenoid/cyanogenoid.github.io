+++
title = "Better set representations for relational reasoning "
date = 2020-03-09

[taxonomies]
tags = ["neurips 2020"]
+++

Set-structured latent spaces improve generalisation and robustness.

[[arxiv]](https://arxiv.org/abs/2003.04448)
[[code]](https://github.com/CUVL/SSLR)
[[video]](https://www.youtube.com/watch?v=Yhe5mZ-i6-Y)

<!-- more -->

Incorporating relational reasoning into neural networks has greatly expanded their capabilities and scope. One defining trait of relational reasoning is that it operates on a set of entities, as opposed to standard vector representations. Existing end-to-end approaches typically extract entities from inputs by directly interpreting the latent feature representations as a set. We show that these approaches do not respect set permutational invariance and thus have fundamental representational limitations. To resolve this limitation, we propose a simple and general network module called a Set Refiner Network (SRN). We first use synthetic image experiments to demonstrate how our approach effectively decomposes objects without explicit supervision. Then, we insert our module into existing relational reasoning models and show that respecting set invariance leads to substantial gains in prediction performance and robustness on several relational reasoning tasks. 

```bib
@inproceedings{
    huang2020srn,
    author        = {Qian Huang and Horace He and Abhay Singh and Yan Zhang and Ser-Nam Lim and Austin Benson},
    title         = {Better Set Representations For Relational Reasoning},
    booktitle     = {Advances in Neural Information Processing Systems},
    year          = {2020},
    eprint        = {2003.04448},
    url           = {https://arxiv.org/abs/2003.04448},
}
```
