+++
title = "Improving Equivariant Networks with Probabilistic Symmetry Breaking"
date = 2025-03-27

[taxonomies]
tags = ["iclr 2025"]
+++

Equivariant networks can't break symmetries; randomized canonicalization (SymPE) gives them that ability while keeping the symmetry inductive bias.

[[arxiv]](https://arxiv.org/abs/2503.21985)

<!-- more -->

Equivariance encodes known symmetries into neural networks, often enhancing generalization. However, equivariant networks cannot break symmetries: the output of an equivariant network must, by definition, have at least the same self-symmetries as the input. This poses an important problem, both (1) for prediction tasks on domains where self-symmetries are common, and (2) for generative models, which must break symmetries in order to reconstruct from highly symmetric latent spaces. This fundamental limitation can be addressed by considering equivariant conditional distributions, instead of equivariant functions. We present novel theoretical results that establish necessary and sufficient conditions for representing such distributions. Concretely, this representation provides a practical framework for breaking symmetries in any equivariant network via randomized canonicalization. Our method, SymPE (Symmetry-breaking Positional Encodings), admits a simple interpretation in terms of positional encodings. This approach expands the representational power of equivariant networks while retaining the inductive bias of symmetry, which we justify through generalization bounds. Experimental results demonstrate that SymPE significantly improves performance of group-equivariant and graph neural networks across diffusion models for graphs, graph autoencoders, and lattice spin system modeling.

```bibtex
@inproceedings{
    lawrence2025sympe,
    author        = {Lawrence, Hannah and Portilheiro, Vasco and Zhang, Yan and Kaba, S\'{e}kou-Oumar},
    title         = {Improving Equivariant Networks with Probabilistic Symmetry Breaking},
    booktitle     = {International Conference on Learning Representations},
    year          = {2025},
    eprint        = {2503.21985},
    url           = {https://arxiv.org/abs/2503.21985}
}
```
