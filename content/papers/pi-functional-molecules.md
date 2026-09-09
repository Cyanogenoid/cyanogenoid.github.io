+++
title = "Generating π-Functional Molecules Using STGG+ with Active Learning"
description = "An active learning loop around STGG+ that generates π-functional molecules with out-of-distribution absorption properties."
date = 2025-02-20

[taxonomies]
tags = ["iclr 2025"]
+++

An active learning loop around STGG+ that generates π-functional molecules with out-of-distribution absorption properties.

[[arxiv]](https://arxiv.org/abs/2502.14842)
[[code]](https://github.com/SamsungSAILMontreal/STGG-AL)

<!-- more -->

Generating novel molecules with out-of-distribution properties is a major challenge in molecular discovery. While supervised learning methods generate high-quality molecules similar to those in a dataset, they struggle to generalize to out-of-distribution properties. Reinforcement learning can explore new chemical spaces but often conducts 'reward-hacking' and generates non-synthesizable molecules. In this work, we address this problem by integrating a state-of-the-art supervised learning method, STGG+, in an active learning loop. Our approach iteratively generates, evaluates, and fine-tunes STGG+ to continuously expand its knowledge. We denote this approach STGG+AL. We apply STGG+AL to the design of organic π-functional materials, specifically two challenging tasks: 1) generating highly absorptive molecules characterized by high oscillator strength and 2) designing absorptive molecules with reasonable oscillator strength in the near-infrared (NIR) range. The generated molecules are validated and rationalized in-silico with time-dependent density functional theory. Our results demonstrate that our method is highly effective in generating novel molecules with high oscillator strength, contrary to existing methods such as reinforcement learning (RL) methods. We open-source our active-learning code along with our Conjugated-xTB dataset containing 2.9 million π-conjugated molecules and the function for approximating the oscillator strength and absorption wavelength (based on sTDA-xTB).

```bibtex
@inproceedings{
    jolicoeur-martineau2025stggal,
    author        = {Jolicoeur-Martineau, Alexia and Zhang, Yan and Knyazev, Boris and Baratin, Aristide and Liu, Cheng-Hao},
    title         = {Generating π-Functional Molecules Using STGG+ with Active Learning},
    booktitle     = {XAI4Science Workshop at International Conference on Learning Representations},
    year          = {2025},
    eprint        = {2502.14842},
    url           = {https://arxiv.org/abs/2502.14842}
}
```
