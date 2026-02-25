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
piVisualization: true
---

Today, everyone is using claude code or spends $20,000 on some mac minis to run kimi 2.5 & friends. That's all well and good but the problem is when everyone's job becomes easier from AI tooling, software jobs are not worth as much.

To remain relevant, I have decided to start learning pytorch and training my own models.

Pytorch is the lisp of matrix mathematics. All foundational models today are built in it. Tesla, Anthropic and OpenAI do their work in pytorch. Huggingface has easy to deploy pipelines for your pytorch models. 

It has

* gpu/cpu support,
* neural network support,
* and can handle anything you can do in matrices. Which is everything.

All the optimizations on llama-cpp for gpus can be redone yourself in pytorch once the concepts like flash attention and key value caches are understood in pytorch terms.

I know in my previous posts I talked about the ergonomics of transformers but pytorch is the way to go if you want to be doing anything interesting in AI today beyond just being another consumer of other people's AI tooling.

So I've set about a series of lessons for myself to learn pytorch. My first one is computing pi using a unit circle. The key seems to be thinking in batched vectorized operations. Any time I'm writing a loop, there is probably a matrix operation I can do in pytorch.

Here is my example I constructed to compute pi - generated with a local copy of deepseek-coder:6.7b

```python
import torch

total_points = 100000000
points = torch.rand(2, total_points)
center = torch.tensor([.5, .5])

distances = torch.cdist(points.t(), center.unsqueeze(-1).t())

inside_outside_unit_circle = distances > .5

inside_unit_circle = torch.sum(inside_outside_unit_circle == False).item()
outside_unit_circle = torch.sum(inside_outside_unit_circle == True).item()
print(4 * inside_unit_circle/total_points)
```

A unit circle's area is equal to pi because the area of a circle is pi * r ^ 2 and in a unit circle, r = 1. So if we throw darts at a circle inscribed in a square and count the number of darts inside the circle and divide that by total number of darts, we'll get the area consumed by darts within the circle which will equal pi.

Here's a Claude Vibecoded visualization to describe.

<div id="pi-vis-root"></div>

The idea is if you throw darts at a unit circle inscribed within a square, the number of darts inside the circle times 4 / total number of darts thrown will equal to pi. The intuition behind this is
* The area of a circle is pi * r ^ 2
* The area of the square is 2 * 2 because the unit circle's radius inscribed in the square is 1.

As you can see, the more darts thrown the board, the closer we get to pi.

Anyway, the new pytorch concepts for me are

* unsqueeze
* cdist
* the == syntax inside sum
* .item

unsqueeze takes a tensor and adds a new dimension at the number you input. The range of the numbers is 0 to number of dimensions + 1. You can also pass in negative indexes but these work the same way as python list indexes where -1 means the last element in a list.

For example

```python
torch.ones(3) # [1, 1, 1]
```

Will make the vector of 3 ones into a row containing 3 columns each containing 1.

cdist.

Future lesson ideas
* Writing a linear layer like $y = xW + b$ using only matrix multiplication.
* Implement softmax.
* Revisit zero to hero and map how the recursive back propagation algorithm is done in pytorch.
* Create a convolution layer.

