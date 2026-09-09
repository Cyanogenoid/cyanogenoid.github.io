+++
title = "Molecule property prediction with molecular orbitals"
date = 2026-04-26

[taxonomies]
tags = ["iclr 2026"]
+++

Molecular orbitals are free when running DFT and significantly improve property prediction over a pretrained molecular foundation model.

[[openreview]](https://openreview.net/forum?id=e7UWFXJEfI)

<!-- more -->

Molecular orbitals describe the distribution of electrons in a molecule and are frequently used by chemists to understand properties of molecules, yet machine learning has neglected them so far. If atom coordinates are obtained through DFT anyway, they can be obtained for free at the same time and are thus a useful source of additional data, particularly when data is scarce. We give an introduction to molecular orbitals for a machine learning audience and propose models to process three different representations of them. Experiments on a dataset with experimental properties show that including MOs significantly improves performance and sample efficiency over a pretrained molecular foundation model on this real-world task.

```bibtex
@inproceedings{
    zhang2026orbitals,
    author        = {Zhang, Yan and Ngo, Nhat Khang and Kaba, S\'{e}kou-Oumar and Levy, Daniel and Ravanbakhsh, Siamak and Baratin, Aristide and Kwon, Kisoo and Jang, MiYoung and Cho, Eun and Park, Sang Ha and Yoo, Sanghyun and Kim, Young-Seok and Lee, Hasup},
    title         = {Molecule property prediction with molecular orbitals},
    booktitle     = {AI4MAT Workshop at International Conference on Learning Representations},
    year          = {2026},
    url           = {https://openreview.net/forum?id=e7UWFXJEfI}
}
```
