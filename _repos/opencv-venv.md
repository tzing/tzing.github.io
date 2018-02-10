---
title: opencv-venv
github: tzing/opencv-venv
create: 2017-10-17
description: Build opencv from source, in the python venv.
tags:
  - shell
---

Scripts to build opencv from source in python virtual env

## build

```sh
git clone git@github.com:tzing/opencv-venv.git --recursive
cd opencv-venv
source <path-to-venv>/bin/activate
sh gen.sh
make -j8
make install
```

## clean

```sh
git clean -dxf
```

## environment

this script is used under *python3* + *opencv3*

+ python2 is DISABLED in [gen.sh]
+ opencv2 is not tested

[gen.sh]: https://github.com/tzing/opencv-venv/blob/master/gen.sh
