+++
title = "Graph Neural Networks for Learning Equivariant Representations of Neural Networks"
date = 2024-03-18

[taxonomies]
tags = ["iclr 2024"]
+++

Represent neural networks as computational graphs so a single permutation-equivariant GNN can process diverse architectures.

[[arxiv]](https://arxiv.org/abs/2403.12143)
[[code]](https://github.com/mkofinas/neural-graphs)

<!-- more -->

Neural networks that process the parameters of other neural networks find applications in domains as diverse as classifying implicit neural representations, generating neural network weights, and predicting generalization errors. However, existing approaches either overlook the inherent permutation symmetry in the neural network or rely on intricate weight-sharing patterns to achieve equivariance, while ignoring the impact of the network architecture itself. In this work, we propose to represent neural networks as computational graphs of parameters, which allows us to harness powerful graph neural networks and transformers that preserve permutation symmetry. Consequently, our approach enables a single model to encode neural computational graphs with diverse architectures. We showcase the effectiveness of our method on a wide range of tasks, including classification and editing of implicit neural representations, predicting generalization performance, and learning to optimize, while consistently outperforming state-of-the-art methods.

```bibtex
@inproceedings{
    kofinas2024neuralgraphs,
    author        = {Kofinas, Miltiadis and Knyazev, Boris and Zhang, Yan and Chen, Yunlu and Burghouts, Gertjan J and Gavves, Efstratios and Snoek, Cees G M and Zhang, David W},
    title         = {Graph Neural Networks for Learning Equivariant Representations of Neural Networks},
    booktitle     = {International Conference on Learning Representations},
    year          = {2024},
    eprint        = {2403.12143},
    url           = {https://arxiv.org/abs/2403.12143}
}
```
