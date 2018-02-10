---
title: Puzzling
image: assets/repos/puzzle_thumb.jpg
description: Puzzle the segments using SIFT.
create: 2017-05-10
tags:
  - Computer Vision
  - C++
  - icon: puzzle
    text: puzzle
---

puzzling pictures!

this code was an assignment of computer vision lecture (nctu: ile5015)

{% capture screenshot %}{{ 'assets/repos/puzzle.jpg' | relative_url }}{% endcapture %}
{% include img.html src=screenshot %}

## Compile

dev under

- `visual studio` 2015
- `opencv` 3.2.0 **with** `opencv_contrib`

with environment variable

- `%OpenCV320%` path to OpenCV 3.2.0 build directory

## Execute

```
PROG [-s sample] [-t target] [-o output] puzzle [puzzle...]
```

- `-s` *(sample)* path to sample image
- `-t` *(target)* path to target image
- `-o` *(output, optional)* specific output filename
- `puzzle` path to puzzle images
