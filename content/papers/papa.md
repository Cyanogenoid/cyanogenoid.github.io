+++
title = "PopulAtion Parameter Averaging (PAPA)"
description = "Push a population of diverse models toward the population weight average to combine ensembling with single-model efficiency."
date = 2023-04-06

[taxonomies]
tags = ["tmlr 2024"]
+++

Push a population of diverse models toward the population weight average to combine ensembling with single-model efficiency.

[[arxiv]](https://arxiv.org/abs/2304.03094)
[[code]](https://github.com/SamsungSAILMontreal/PAPA)

<!-- more -->

Ensemble methods combine the predictions of multiple models to improve performance, but they require significantly higher computation costs at inference time. To avoid these costs, multiple neural networks can be combined into one by averaging their weights. However, this usually performs significantly worse than ensembling. Weight averaging is only beneficial when different enough to benefit from combining them, but similar enough to average well. Based on this idea, we propose PopulAtion Parameter Averaging (PAPA): a method that combines the generality of ensembling with the efficiency of weight averaging. PAPA leverages a population of diverse models (trained on different data orders, augmentations, and regularizations) while slowly pushing the weights of the networks toward the population average of the weights. We also propose PAPA variants (PAPA-all, and PAPA-2) that average weights rarely rather than continuously; all methods increase generalization, but PAPA tends to perform best. PAPA reduces the performance gap between averaging and ensembling, increasing the average accuracy of a population of models by up to 0.8% on CIFAR-10, 1.9% on CIFAR-100, and 1.6% on ImageNet when compared to training independent (non-averaged) models.

```bibtex
@article{
    jolicoeur-martineau2024papa,
    author        = {Jolicoeur-Martineau, Alexia and Gervais, Emy and Fatras, Kilian and Zhang, Yan and Lacoste-Julien, Simon},
    title         = {PopulAtion Parameter Averaging (PAPA)},
    journal       = {Transactions on Machine Learning Research},
    year          = {2024},
    eprint        = {2304.03094},
    url           = {https://arxiv.org/abs/2304.03094}
}
```
