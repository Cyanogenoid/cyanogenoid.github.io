+++
title = "Learning to count objects in natural images for visual question answering"
date = 2018-02-15

[taxonomies]
tags = ["iclr 2018"]
+++

Enabling visual question answering models to count by handling overlapping object proposals.

[[arxiv]](https://arxiv.org/abs/1802.05766)
[[code]](https://github.com/Cyanogenoid/vqa-counting)
[[poster]](/files/l2c-poster.pdf)

<!-- more -->

Visual Question Answering (VQA) models have struggled with counting objects in natural images so far. We identify a fundamental problem due to soft attention in these models as a cause. To circumvent this problem, we propose a neural network component that allows robust counting from object proposals. Experiments on a toy task show the effectiveness of this component and we obtain state-of-the-art accuracy on the number category of the VQA v2 dataset without negatively affecting other categories, even outperforming ensemble models with our single model. On a difficult balanced pair metric, the component gives a substantial improvement in counting over a strong baseline by 6.6%. 

```bib
@inproceedings{
    zhang2018vqacounting,
    title         = {Learning to Count Objects in Natural Images for Visual Question Answering},
    author        = {Yan Zhang and Jonathon Hare and Adam Pr\"ugel-Bennett},
    booktitle     = {International Conference on Learning Representations},
    year          = {2018},
    eprint        = {1802.05766},
    url           = {https://openreview.net/forum?id=B12Js_yRb},
}
```