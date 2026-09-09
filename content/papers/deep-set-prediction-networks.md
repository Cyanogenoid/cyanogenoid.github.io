+++
title = "Deep set prediction networks"
date = 2019-06-15

[taxonomies]
tags = ["neurips 2019"]
+++

To predict a set from a vector, use gradient descent to find a set the encodes to that vector.

[[arxiv]](https://arxiv.org/abs/1906.06565)
[[code]](https://github.com/Cyanogenoid/dspn)
[[poster 1]](/files/dspn-poster.pdf)
[[poster 2]](/files/dspn-workshop-poster.pdf)

<!-- more -->

Current approaches for predicting sets from feature vectors ignore the unordered nature of sets and suffer from discontinuity issues as a result. We propose a general model for predicting sets that properly respects the structure of sets and avoids this problem. With a single feature vector as input, we show that our model is able to auto-encode point sets, predict the set of bounding boxes of objects in an image, and predict the set of attributes of these objects. 

{% raw %}
```bibtex
@inproceedings{
    zhang2019dspn,
    author        = {Yan Zhang and Jonathon Hare and Adam Pr\"ugel-Bennett},
    title         = {{Deep Set Prediction Networks}},
    booktitle     = {Advances in Neural Information Processing Systems},
    year          = {2019},
    eprint        = {1906.06565},
    url           = {https://arxiv.org/abs/1906.06565},
}
```
{% endraw %}