+++
title = "Unlocking Slot Attention by Changing Optimal Transport Costs"
date = 2023-01-30

[taxonomies]
tags = ["icml 2023"]
+++

Make slot attention more powerful by taking an optimal transport perspective.

[[arxiv]](https://arxiv.org/abs/2301.13197)
[[code]](https://github.com/davzha/MESH)

<!-- more -->

Slot attention is a powerful method for object-centric modeling in images and videos. However, its set-equivariance limits its ability to handle videos with a dynamic number of objects because it cannot break ties. To overcome this limitation, we first establish a connection between slot attention and optimal transport. Based on this new perspective we propose MESH (Minimize Entropy of Sinkhorn): a cross-attention module that combines the tiebreaking properties of unregularized optimal transport with the speed of regularized optimal transport. We evaluate slot attention using MESH on multiple object-centric learning benchmarks and find significant improvements over slot attention in every setting.

```bibtex
@inproceedings{
    zhang2023samesh,
    author        = {Zhang, Yan and Zhang, David W and Lacoste-Julien, Simon and Burghouts, Gertjan J and Snoek, Cees G M},
    title         = {Unlocking Slot Attention by Changing Optimal Transport Costs},
    booktitle     = {International Conference on Machine Learning},
    year          = {2023},
    eprint        = {2301.13197},
    url           = {https://proceedings.mlr.press/v202/zhang23ba.html}
}
```
