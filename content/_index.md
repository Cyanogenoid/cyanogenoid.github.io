+++
title = "Yan Zhang"
template = "homepage.html"
+++

I'm a research scientist at [Samsung - SAIT AI Lab, Montreal](https://www.sait.samsung.co.kr/saithome/about/labs.do), which is located within [Mila](https://mila.quebec/).
My current research focuses on deep learning with structured objects like sets and their equivariance properties.

[[scholar]](https://scholar.google.com/citations?user=XtCqbfEAAAAJ)
[[github]](https://github.com/Cyanogenoid)
[[email]](mailto:yan@hi.cyan.zone)
[[phd thesis]](/files/thesis.pdf)
<!-- [[twitter]](https://twitter.com/Cyanogenoid) -->


# Featured
- ICLR 2022 paper and video on [multiset-equivariance](/papers/multiset-equivariance)!

{{ <youtube id="2iGmXmjaQus" /> }}

# Papers
- [M⁴olGen: Multi-Agent, Multi-Stage Molecular Generation under Precise Multi-Property Constraints](/papers/m4olgen).</br>Yizhan Li, Florence Cloutier, Sifan Wu, Ali Parviz, Boris Knyazev, **Yan Zhang**, Glen Berseth, Bang Liu. AACL-IJCNLP Findings 2026.
![](/img/m4olgen.webp)
A multi-agent, multi-stage LLM framework that generates molecules satisfying precise numeric multi-property constraints.
- [Molecule property prediction with molecular orbitals](/papers/molecular-orbitals).</br>**Yan Zhang**, Nhat Khang Ngo, Sékou-Oumar Kaba, Daniel Levy, Siamak Ravanbakhsh, Aristide Baratin, Kisoo Kwon, MiYoung Jang, Eun Cho, Sang Ha Park, Sanghyun Yoo, Young-Seok Kim, Hasup Lee. AI4MAT Workshop, ICLR 2026.
![](/img/molecular-orbitals.webp)
Molecular orbitals are free when running DFT and significantly improve property prediction over a pretrained molecular foundation model.
- [Improving Equivariant Networks with Probabilistic Symmetry Breaking](/papers/improving-equivariant-networks).</br>Hannah Lawrence, Vasco Portilheiro, **Yan Zhang**, Sékou-Oumar Kaba. ICLR 2025.
![](/img/sympe.webp)
Equivariant networks can't break symmetries; randomized canonicalization (SymPE) gives them that ability while keeping the symmetry inductive bias.
- [Any-Property-Conditional Molecule Generation with Self-Criticism using Spanning Trees](/papers/stgg-plus).</br>Alexia Jolicoeur-Martineau, Aristide Baratin, Kisoo Kwon, Boris Knyazev, **Yan Zhang**. TMLR 2025.<img src="/img/stgg-plus.webp" class="center" width="440">
Extend spanning-tree molecule generation to conditioning on any subset of properties, with a self-criticism property-prediction loss.
- [Generating π-Functional Molecules Using STGG+ with Active Learning](/papers/pi-functional-molecules).</br>Alexia Jolicoeur-Martineau, **Yan Zhang**, Boris Knyazev, Aristide Baratin, Cheng-Hao Liu. XAI4Science Workshop, ICLR 2025.
![](/img/stgg-al.webp)
An active learning loop around STGG+ that generates π-functional molecules with out-of-distribution absorption properties.
- [Concept-based Steering of Large Language Models for Conditional Molecular Generation](/papers/concept-based-steering).</br>Jeremy Qin, Rushil Gupta, Boris Knyazev, **Yan Zhang**, Glen Berseth, Bang Liu. AI4Mat Workshop, NeurIPS 2025.<img src="/img/cast.webp" class="center" width="500">
A concept bottleneck (CAST) gives direct, precise control over LLM-based conditional molecular generation.
- [Graph Neural Networks for Learning Equivariant Representations of Neural Networks](/papers/neural-networks-as-graphs).</br>Miltiadis Kofinas, Boris Knyazev, **Yan Zhang**, Yunlu Chen, Gertjan J. Burghouts, Efstratios Gavves, Cees G. M. Snoek, David W. Zhang. ICLR 2024.<img src="/img/neural-graphs.webp" class="center" width="500">
Represent neural networks as computational graphs so a single permutation-equivariant GNN can process diverse architectures.
- [Object-centric architectures enable efficient causal representation learning](/papers/object-centric-causal).</br>Amin Mansouri, Jason Hartford, **Yan Zhang**, Yoshua Bengio. ICLR 2024.
![](/img/object-centric-causal.webp)
Object-centric (Slot Attention) architectures make interventional causal representation learning more data-efficient.
- [Improved Generalization of Weight Space Networks via Augmentations](/papers/weight-space-augmentations).</br>Aviv Shamsian, Aviv Navon, David W. Zhang, **Yan Zhang**, Ethan Fetaya, Gal Chechik, Haggai Maron. ICML 2024.
![](/img/weight-space.webp)
Weight-space MixUp and augmentations fix overfitting of networks that operate on other networks' weights.
- [Unsupervised Concept Discovery Mitigates Spurious Correlations](/papers/cobalt).</br>Md Rifat Arefin, **Yan Zhang**, Aristide Baratin, Francesco Locatello, Irina Rish, Dianbo Liu, Kenji Kawaguchi. ICML 2024.
![](/img/cobalt.webp)
Unsupervised object-centric concept discovery (CoBalT) mitigates spurious correlations without group annotation.
- [PopulAtion Parameter Averaging (PAPA)](/papers/papa).</br>Alexia Jolicoeur-Martineau, Emy Gervais, Kilian Fatras, **Yan Zhang**, Simon Lacoste-Julien. TMLR 2024.<img src="/img/papa.webp" class="center" width="460">
Push a population of diverse models toward the population weight average to combine ensembling with single-model efficiency.
- [Unlocking Slot Attention by Changing Optimal Transport Costs](/papers/unlocking-slot-attention).</br>**Yan Zhang**\*, David W. Zhang\*, Simon Lacoste-Julien, Gertjan J. Burghouts, Cees G. M. Snoek. ICML 2023.
![](/img/samesh.webp)
Make slot attention more powerful by taking an optimal transport perspective.

- [CrossSplit: Mitigating Label Noise Memorization through Data Splitting](/papers/crosssplit).</br>Jihye Kim, Aristide Baratin, **Yan Zhang**, Simon Lacoste-Julien. ICML 2023.
![](/img/crosssplit.webp)
Improve robust learning under label noise by reducing memorization of noisy labels using a novel training framework

- [Equivariance with Learned Canonicalization Functions](/papers/learned-canonicalization).</br> Sékou-Oumar Kaba*, Arnab Kumar Mondal, **Yan Zhang**, Yoshua Bengio, Siamak Ravanbakhsh. ICML 2023.
![](/img/learned-canonicalization.webp)
Make models equivariant by learning to map data to canonical examples.

- [Multiset-equivariant set prediction with approximate implicit differentiation](/papers/multiset-equivariance).</br> **Yan Zhang**\*, David W. Zhang\*, Simon Lacoste-Julien, Gertjan J. Burghouts, Cees G. M. Snoek. ICLR 2022.
![](/img/mset-equiv.webp)
A better permutation-equivariance property for set prediction.

- [Better set representations for relational reasoning](/papers/better-set-representations).</br> Qian Huang\*, Horace He\*, Abhay Singh, **Yan Zhang**, Ser-Nam Lim, Austin Benson. NeurIPS 2020.
![](https://github.com/CUAI/BetterSetRepresentations/blob/master/imgs/set.png?raw=true)
Set-structured latent spaces improve generalisation and robustness.

- [Deep set prediction networks](/papers/deep-set-prediction-networks/).</br> **Yan Zhang**, Jonathon Hare, Adam Prügel-Bennett. NeurIPS 2019.
![](https://github.com/Cyanogenoid/dspn/blob/master/overview.png?raw=true)
To predict a set from a vector, use gradient descent to find a set the encodes to that vector.

- [FSPool: Learning set representations with featurewise sort pooling](/papers/featurewise-sort-pooling).</br> **Yan Zhang**, Jonathon Hare, Adam Prügel-Bennett. ICLR 2020.
![](https://github.com/Cyanogenoid/fspool/raw/master/overview.png)
Sort in encoder and undo sorting in decoder to avoid responsibility problem in set auto-encoders.

- [Learning Representations of Sets through Optimized Permutations](/papers/permutation-optimization).</br> **Yan Zhang**, Jonathon Hare, Adam Prügel-Bennett. ICLR 2019.
![](https://github.com/Cyanogenoid/perm-optim/raw/master/sketch.png)
Learn how to permute a set, then encode permuted set with RNN to obtain a set representation.

- [Learning to count objects in natural images for visual question answering](/papers/learning-to-count-in-vqa).</br> **Yan Zhang**, Jonathon Hare, Adam Prügel-Bennett. ICLR 2018.
![](https://raw.githubusercontent.com/Cyanogenoid/vqa-counting/master/cats.png)
Enabling visual question answering models to count by handling overlapping object proposals.
