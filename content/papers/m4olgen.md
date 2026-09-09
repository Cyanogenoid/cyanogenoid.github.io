+++
title = "M⁴olGen: Multi-Agent, Multi-Stage Molecular Generation under Precise Multi-Property Constraints"
date = 2026-01-15

[taxonomies]
tags = ["aacl 2026"]
+++

A multi-agent, multi-stage LLM framework that generates molecules satisfying precise numeric multi-property constraints.

[[arxiv]](https://arxiv.org/abs/2601.10131)

<!-- more -->

Generating molecules that satisfy precise numeric constraints over multiple physicochemical properties is critical and challenging. Although large language models (LLMs) are expressive, they struggle with precise multi-objective control and numeric reasoning without external structure and feedback. We introduce M⁴olGen, a fragment-level, retrieval-augmented, two-stage framework for molecule generation under multi-property constraints. Stage I: Prototype generation: a multi-agent reasoner performs retrieval-anchored, fragment-level edits to produce a candidate near the feasible region. Stage II: RL-based fine-grained optimization: a fragment-level optimizer trained with Group Relative Policy Optimization (GRPO) applies one- or multi-hop refinements to explicitly minimize the property errors toward our target while regulating edit complexity and deviation from the prototype. A large, automatically curated dataset with reasoning chains of fragment edits and measured property deltas underpins both stages, enabling deterministic, reproducible supervision and controllable multi-hop reasoning. Unlike prior work, our framework better reasons about molecules by leveraging fragments and supports controllable refinement toward numeric targets. Experiments on generation under two sets of property constraints (QED, LogP, Molecular Weight and HOMO, LUMO) show consistent gains in validity and precise satisfaction of multi-property targets, outperforming strong LLMs and graph-based algorithms.

```bibtex
@inproceedings{
    li2026m4olgen,
    author        = {Li, Yizhan and Cloutier, Florence and Wu, Sifan and Parviz, Ali and Knyazev, Boris and Zhang, Yan and Berseth, Glen and Liu, Bang},
    title         = {M⁴olGen: Multi-Agent, Multi-Stage Molecular Generation under Precise Multi-Property Constraints},
    booktitle     = {Findings of the Association for Computational Linguistics: AACL-IJCNLP 2026},
    year          = {2026},
    eprint        = {2601.10131},
    url           = {https://arxiv.org/abs/2601.10131}
}
```
