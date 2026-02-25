---
title: How to Compute Pi With Pytorch
date: 2026-02-22
summary: Learning pytorch by computing pi.
toc: false
readTime: true
autonumber: true
math: true
tags:
  - scraping
  - qwen
  - vision-language
showTags: true
hideBackToTop: false
---

Pytorch is like the lisp of matrix mathematics. All foundational models today are built in pytorch. Huggingface has easy to deploy pipelines for your pytorch models. Pytorch can do gpu/cpu support. It has a neural network library. It is the power of the gods.

My previous post [scraping target with qwen](https://seanneilan.com/posts/scraping-target-with-qwen/) gave me 10x more questions than answers about local language models. I spoke to my friends at the local SFVLUG and they recommended going deeper into llms but with pytorch.

In order to learn pytorch, here is a program to compute pi using a unit circle.

import torch

total_points = 100000000
points = torch.rand(2, total_points)
center = torch.tensor([.5, .5])

distances = torch.cdist(points.t(), center.unsqueeze(-1).t())

inside_outside_unit_circle = distances > .5

inside_unit_circle = torch.sum(inside_outside_unit_circle == False).item()
outside_unit_circle = torch.sum(inside_outside_unit_circle == True).item()
print(4*inside_unit_circle/total_points)

