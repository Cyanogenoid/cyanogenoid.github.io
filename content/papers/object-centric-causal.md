+++
title = "Object-centric architectures enable efficient causal representation learning"
description = "Object-centric (Slot Attention) architectures make interventional causal representation learning more data-efficient."
date = 2023-10-29

[taxonomies]
tags = ["iclr 2024"]
+++

Object-centric (Slot Attention) architectures make interventional causal representation learning more data-efficient.

[[arxiv]](https://arxiv.org/abs/2310.19054)

<!-- more -->

Causal representation learning has showed a variety of settings in which we can disentangle latent variables with identifiability guarantees (up to some reasonable equivalence class). Common to all of these approaches is the assumption that (1) the latent variables are represented as d-dimensional vectors, and (2) that the observations are the output of some injective generative function of these latent variables. While these assumptions appear benign, we show that when the observations are of multiple objects, the generative function is no longer injective and disentanglement fails in practice. We can address this failure by combining recent developments in object-centric learning and causal representation learning. By modifying the [Slot Attention](https://arxiv.org/abs/2006.15055) architecture, we develop an object-centric architecture that leverages weak supervision from sparse perturbations to disentangle each object's properties. This approach is more data-efficient in the sense that it requires significantly fewer perturbations than a comparable approach that encodes to a Euclidean space and we show that this approach successfully disentangles the properties of a set of objects in a series of simple image-based disentanglement experiments.

```bibtex
@inproceedings{
    mansouri2024objectcentric,
    author        = {Mansouri, Amin and Hartford, Jason and Zhang, Yan and Bengio, Yoshua},
    title         = {Object-centric architectures enable efficient causal representation learning},
    booktitle     = {International Conference on Learning Representations},
    year          = {2024},
    eprint        = {2310.19054},
    url           = {https://arxiv.org/abs/2310.19054}
}
```
