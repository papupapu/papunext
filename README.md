## Milestones

#### 05/01/2021

Commit **f3c43b3**

Add `axios` as HTTP lib candidate: bundle up to 79.5kb (>10k).
No performance decay observed.

#### 29/12/2020

Commit **d7c679a**

WatchScroll optimization
Introduce SVG icons
Major file structure reorganization

Performances did not change:

##### Mobile - score: 96

FCP: 2,1s

Speed Index: 2,1s

LCP: 2,5 s

TtI: 2,3s

TBT: 30 ms

CLS: 0

##### Desktop - score: 99

FCP: 0,7s

Speed Index: 0,7s

LCP: 0,8s

TtI: 0,7s

TBT: 0ms

CLS: 0

#### 29/12/2020

Commit **d7d4dae** "WatchScroll" component for JS img lazyload.

On mobile this caused a performance increase: all metrics are back to previous values

#### 29/12/2020

Commit **c4218b6** introduced images in the "below the fold" part of the page.

Even if the attribute _loading="lazy"_ is used on all images, the browser is still loading 3 images that are not in the top area, while it works fine for the top slider.

On mobile this caused a performance drop: score went from 97/96 to 94, LCP skyrocketed from 2.5s to 3.0s.

Is it possible to prevent this with JS lazyload? Opening dedicated test branch (lazyload).

## Make webp images

```
`for file in a/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
```
