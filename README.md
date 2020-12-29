## Milestones

#### 29/12/2020

Commit **d7d4dae** "WatchScroll" component for JS img lazyload.

On mobile this caused a performance increase: all metrics are back to previous values

ToDo: change WatchScroll implementation for performances (move it to wrap picture)

#### 29/12/2020

Commit **c4218b6** introduced images in the "below the fold" part of the page.

Even if the attribute _loading="lazy"_ is used on all images, the browser is still loading 3 images that are not in the top area, while it works fine for the top slider.

On mobile this caused a performance drop: score went from 97/96 to 94, LCP skyrocketed from 2.5s to 3.0s.

Is it possible to prevent this with JS lazyload? Opening dedicated test branch (lazyload).

## Make webp images

```
`for file in a/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
```
