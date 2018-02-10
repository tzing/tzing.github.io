---
title: T-CNN
create: 2017-10-31
image: assets/repos/tcnn.png
github: tzing/t-cnn
description: >
  PyTorch implementation of "Modeling and propagating cnns in a tree structure for
  visual tracking"
tags:
  - Computer Vision
  - Object Tracking
  - Deep Learning
  - PyTorch
  - Python
---

PyTorch implement of "Modeling and propagating cnns in a tree structure for
visual tracking"

original paper:

```tex
@article{nam2016modeling,
  title={Modeling and propagating cnns in a tree structure for visual tracking},
  author={Nam, Hyeonseob and Baek, Mooyeol and Han, Bohyung},
  journal={arXiv preprint arXiv:1608.07242},
  year={2016}
}
```

## requirements

+ python 3.6+
+ pytorch
+ torchvision
+ scikit-learn

## execute

```
usage: main.py [-h] dataset dest

positional arguments:
  dataset
  dest
```

this code use VOT dataset and will use ground truth of first frame as
tracking target
