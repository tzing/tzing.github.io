---
title: Shadow volume
github: tzing/shadow
image: assets/repos/shadow.png
create: 2017-11-15
description: Multi-object shadow volume demo.
tag:
  - Computer Graphic
  - OpenGL
  - C++
use_math: true
---

Shadow: OpenGL shadow volume demo.

{% include img.html src="https://github.com/tzing/shadow/raw/master/imgs/screenshot.png" %}

# details

> computer graphics assignment 2

**table of content**

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->
<!-- code_chunk_output -->

* [keymap](#keymap)
	* [light source](#light-source)
	* [obstacles](#obstacles)
	* [other](#other)
* [logic](#logic)
	* [files](#files)
	* [obstacle drawing](#obstacle-drawing)
	* [shadow drawing](#shadow-drawing)
* [note](#note)

<!-- /code_chunk_output -->

## keymap

### light source

| key | function
|:---:|----------
| `n` | change light source display mode: *point* / *point with lines* / *dismiss*
| `w` | move up
| `a` | move left
| `s` | move down
| `d` | move right
| `q` | move forward
| `e` | move backward

### obstacles

| key | function
|:---:|----------
| `v` | change selected obstacle
| `2` | display obstacle position
| `8` | move up
| `4` | move left
| `5` | move down
| `6` | move right
| `7` | move forward
| `9` | move backward
| `m` | display obstacle rotate speed
| `i` | speedup rotating up
| `j` | speedup rotating left
| `k` | speedup rotating down
| `l` | speedup rotating right
| `u` | speedup rotating anti-clockwise
| `o` | speedup rotating clockwise

### other

| key | function
|:---:|----------
| `b` | turn on/off shadow
|`esc`| close window

[^n]: **mode:**

## logic

### files

- `main.cpp` VERY basic setup
- `draw.cpp` init & frame update
- `room.cpp` draw room & load texture
- `light.cpp` set light source position & draw light source position indicator
- `obstacle.cpp` draw obstacle and shadow

### obstacle drawing

1. class `obstacle` is rewriten from `object_class` in example code, which has highly similar API and use the same object description file as original.
2. public member:
    - `planes` stores all triangles description
        - it contains 3 `Vertex`
        - a `Vertex` is `std::pair<cv::Vec3f, cv::Vec3f>`, two `Vec3f` represents the vector position and normal respectively
    - `position` global position of the object
    - `rotation` the rotating speed
3. on `draw()` it use `glTranslatef` and `glRotatef` to change the matrix, save the matrix to private member `_trans`, then draw all triangles

### shadow drawing

1. it use `_trans` to project all the points form local position to global positions

    $$
    \begin{bmatrix}
        m_{1}   & m_{5}   & m_{9}   & m_{13} \\
        m_{2}   & m_{6}   & m_{10}  & m_{14} \\
        m_{3}   & m_{7}   & m_{11}  & m_{15} \\
        m_{4}   & m_{8}   & m_{12}  & m_{16}
    \end{bmatrix} \begin{bmatrix}
        lx \\
        ly \\
        lz \\
        1
    \end{bmatrix} = \begin{bmatrix}
        X \\ Y \\ Z \\ W
    \end{bmatrix} \\
    G_{(x,y,z)} = (X, Y, Z) / W
    $$

2. For $G_n$ as vertex global position of each triangle with $L$ represent the light source global position:

    1. Calculate the projection $G'_n$ by multiply the unit vector of $\overrightarrow{LG}$ with a large number $M$

        $$
        \overrightarrow{LG'} = M \times \frac{
            \overrightarrow{LG}
        }{
            \left\lVert{\overrightarrow{LG}}\right\rVert
        }
        $$

        use rectangle $G_nG'_nG'_{n+1}G_{n+1}$ as the boundary surface of shadow volume

    2. Calcuate the center $C$ and normal vector $N$ of the triangle, using cosine to determing that the triangle is facing or backing the light source. Then select the face culling.

        $$
        C = \frac{G_1+G_2+G_3}{3} \\
        N = (G_3-G_1) \times (G_2-G_1) \\
        cos(\theta) = \frac{
            N \cdot \overrightarrow{LC}
        } {
            \left\lVert{N}\right\rVert
            \cdot
            \left\lVert{\overrightarrow{LC}}\right\rVert
        }
        $$

3. Change the matrix mode to `GL_PROJECTION` and draw a rectangle fill all the screen.
4. Enable `GL_BLEND` to make the alpha transparent shadow.
