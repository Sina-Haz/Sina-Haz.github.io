---
layout: post
title: Rotations and the Special Orthogonal Group
date: 2026-07-05
excerpt: An intuitive introduction to rotations in 3D
katex: true        
---

Problem: How can we represent 3D rotations mathematically and how can we compose them?

## 3D Objects
In graphics and physics we represent 3D objects in various different Coordinate Systems, namely the global coordinate system and an objects' local coordinate system:
 - Global: has a fixed origin and is static irregardless of the movement of objects in the space
 - Local: is relative to the position and orientation of the object. An object is always located at the origin of it's own local coordinate system

So to represent any object (in either coordinate system) all we need to know is its _position_ and _orientation_ and a way to map between coordinate systems

 - position we can easily represent via a vector $x \in \mathbb R^3$ representing objects' Center of Mass (CoM)
 - The _orientation_ is what we want to represent -> some mystery element R in some space ?
    - We want to compose rotations over time -> we are looking for a space + operator (a _Group_*) representative of 3D rotations

For now we will ignore the other physical properties of these objects such as their size, weight, etc


## What is a Rotation
Next let's think through what a rotation is:
< interactive graphic of a sphere w/ lines that user can rotate, sphere has red dot on north pole> 
1. After a rotation, the objects' dimensions are exactly the same. It doesn't get twisted, sheared, or scaled (Known as a "rigid" transformation or isometry)
2. Degrees of Freedom* of a rotation:
- Can we achieve any orientation of the sphere by pointing the red dot? 
	- Note: this is a unit vector in $\mathbb R^3$ with 2 DoFs, we have full freedom of x and y but then z is determined s.t. magnitude = 1
- Notice that even if we fix the direction of this dot, we can still rotate by any angle $\theta$ about this direction 
  - so we this is another DoF and we see that any 3D rotation has 3 DoFs
3. Rotations are NOT Commutative
 - this is illustrated via the graphic above
4. Rotations are NOT reflections
- reflections change the _handedness_ of a space
- \<show animation of pen rotation vs. pen reflection and then show another rotation composed with it>
- We can think of this as a spatial inversion, effectively changing up -> down, left -> right in the POV of the 3D object
  - fun way to think of this is that we don't want our rotation operation to send our object into the mirror dimension as seen in Dr. Strange

## Rotation Matrices from Scratch
Using the context and definitions above we can now come up with a representation

### Rotation as a "rigid transformation"
A rotation is a transformation on a coordinate space, it maps from 3D -> 3D so we are looking for a space of matrices in $\mathbb R^{3\times 3}$
  - Matrix multiplication represents a linear transformation AND it's non-commutative ✅
Ensuring "rigidity" of the transformation: <show gif of coordinate system pre rotation & post rotation>
	- In this image we applied rotation R to standard basis I, notice that the new coordinate system RI = R is also an orthonormal basis 
    - Rotations do not scale objects larger or smaller thus the basis vectors must all have magnitude 1 (thus orthonormal and not just orthogonal)
Thus we can deduce that the columns of R form an orthonormal basis, this means R must be an _orthogonal matrix_ which has the special property:
$$ R^T R = RR^T = I$$
(see [here](https://math.stackexchange.com/questions/52717/column-vectors-orthogonal-implies-row-vectors-also-orthogonal) for more)
 - This equation also reinforces the fact that rotations only have 3 Degrees of Freedom, it represents 6 constraints* so the DoF of the rotation matrices is 9 - 6 = 3 ✅

### Excluding reflections
By enforcing just one constraint (namely $R^{-1} = R^T$) we have satisfied all but one requirement for representing rotations. 
However, we have yet to distinguish our representation for rotations apart from reflections!

Recall: The unique property of reflections in that they "invert" the space. We need a constraint that identifies and disallows this.

I'd like to draw your attention to the [Determinant](https://www.youtube.com/watch?v=Ip3X9LOh2dk&t=149s) to accomplish this.
 - The determinant tells us how a linear transformation scales and compresses space by calculating the signed volume of the unit cube post-transformation
  - If the determinant is > 1 then the transformation stretches space
  - if it's 0 then it collapses space into a lower dimension
  - If the determinant is negative, then this means that it _inverted_ space and thus we can identify linear transformations that encode reflections

Applying the determinant to our previous constraint:
$$
\det(R^TR) = \det(I) = 1 \implies \det(R)^2 = 1 \implies \det(R) = \pm 1
$$
As we can see via the determinant it does enforce rigidity of transformation since space is neither stretched nor compressed, however we need to be specific to exclude reflections by adding another constraint:
$$\det(R) = 1$$


## Summary
Thus we have deduced two simple constraints that allow us to represent rotations as 3 by 3 matrices
1. Orthogonal 
$$
R^T R = I
$$

2. Preserve _Handedness_
$$
\det(R) = 1
$$

This representation allows efficient composition via matrix multiplication.

The set of all matrices in $\mathbb R^{3 \times 3}$ that follow these rules are known as the __Special Orthogonal Group__ or SO(3). This is a _smooth manifold_ embedded in the space of 3 by 3 matrices (we will discuss smooth manifolds and take advantage of this property in a later article)

Next time we will discuss the problems of this representation and work our way to the more natural (but less intuitive) representation: quaternions

TODO:
 - fill in asterisks 
 - add a table of contents on the side so users can easily jump to different sections
