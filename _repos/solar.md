---
title: Solar system
description: >
  ☀️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  🛰&nbsp;🌎&nbsp;&nbsp;&nbsp;&nbsp;🌗
create: 2017-10-21
github: tzing/solar-system
image: assets/repos/solar.png
tags:
  - Computer Graphic
  - OpenGL
  - C++
---

A simple solar system demo use OpenGL.

{% include img.html src="https://github.com/tzing/solar-system/raw/master/img/screenshot.png" %}

## Run program

+ requirement

    + C++
    + OpenGL, GLU and GLUT in system path
    + OpenCV 2+ in system path

+ build

    ```
    make
    ```

+ run

    ```
    ./solars
    ```

Makefile is tested under linux with gcc and mac osx with clang(xcode)

## Logic

+ **about `main.cpp`**

    basic setup, almost same as the sample.

+ **about revolution**

    1. It use `std::chrono::steady_clock` to get time in each frame update it calculated the time elasped in seconds, call the planets' `draw()` and use the duration to select the position.
    2. All objects expects sun revolution specific object. It use a tree structure to stores the relationship between the objects. Use depth-first search to travel along the tree and apply OpenGL's matrix stack to draw the objects in correct position easily.

+ **about drawing**

    The standard planets class `Planet_` supports size changing, revolution with specific radius and orbit inclination and rotation along assigned axial tilt.

    For the planets with special requirement (e.g. earth to be a ellipsoid, the sun which have extra lighting...etc.) could override the `void draw(GLUquadricObj*, chrono::duration<float>)` for different viewing.
