+++
title = "Any-Property-Conditional Molecule Generation with Self-Criticism using Spanning Trees"
date = 2024-07-12

[taxonomies]
tags = ["tmlr 2025"]
+++

Extend spanning-tree molecule generation to conditioning on any subset of properties, with a self-criticism property-prediction loss.

[[arxiv]](https://arxiv.org/abs/2407.09357)
[[code]](https://github.com/SamsungSAILMontreal/AnyMolGenCritic)

<!-- more -->

Generating novel molecules is challenging, with most representations leading to generative models producing many invalid molecules. Spanning Tree-based Graph Generation (STGG) is a promising approach to ensure the generation of valid molecules, outperforming state-of-the-art SMILES and graph diffusion models for unconditional generation. In the real world, we want to be able to generate molecules conditional on one or multiple desired properties rather than unconditionally. Thus, in this work, we extend STGG to multi-property-conditional generation. Our approach, STGG+, incorporates a modern Transformer architecture, random masking of properties during training (enabling conditioning on any subset of properties and classifier-free guidance), an auxiliary property-prediction loss (allowing the model to self-criticize molecules and select the best ones), and other improvements. We show that STGG+ achieves state-of-the-art performance on in-distribution and out-of-distribution conditional generation, and reward maximization.

```bibtex
@article{
    jolicoeur-martineau2024stggplus,
    author        = {Jolicoeur-Martineau, Alexia and Baratin, Aristide and Kwon, Kisoo and Knyazev, Boris and Zhang, Yan},
    title         = {Any-Property-Conditional Molecule Generation with Self-Criticism using Spanning Trees},
    journal       = {Transactions on Machine Learning Research},
    year          = {2025},
    eprint        = {2407.09357},
    url           = {https://arxiv.org/abs/2407.09357}
}
```
