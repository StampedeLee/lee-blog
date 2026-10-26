# VR / AR 学习笔记

围绕增强现实参考坐标系、显示系统分类与图形变换整理的课程笔记。

## Q2

### Q2(a) Egocentric and exocentric reference frames

An egocentric reference frame presents the AR environment from the user’s own viewpoint.

An exocentric reference frame presents the environment from an external viewpoint, as though the user were looking into the scene from outside.

### Q2(b) Why EWK matters for see-through versus monitor-based AR

EWK describes how much the system knows about the environment. See-through AR requires accurate object positions, orientations and dimensions to align virtual content with the real world. Monitor-based AR can overlay useful graphics on video with less world knowledge, unless precise alignment is required.

### Q2(c)

These three dimensions provide a reliable framework for classifying and comparing AR and VR systems:

- EWK: How much the system knows about the environment and its objects.
- RF: How faithfully the display reproduces real and virtual images.
- EPM: How strongly the user is intended to feel present within the displayed scene.

**Source:** 02-Milgram displays (1)(1).pdf, PDF pages 34–35 (a), 29, 39 (b), and 39, 44, 48 (c).

## Q3(a)

Transformation order matters because matrix multiplication is generally **not commutative**. Changing the order can change an object’s final position, orientation or size, producing an unintended result.

**Source:** *04-Graphics Pipeline and Transformation (1).pdf*, **PDF page 30 / printed page 30**, “Attention!”

## Q3(b)

View Space places the camera at the origin, looking along a coordinate axis, which **simplifies projection calculations** because we pin down the direction of the camera.

**Source:** Same file, **PDF page 39**, “View Space.”
