## Milestones

29/12/2020
Commit c4218b6 introduced images in the "below the fold" part of the page.
Even if the attribute loading="lazy" is used on all images, the browser is still loading 3 images that are not in the top area, while it works fine for the top slider.
On mobile this caused a parformance drop: score went from 97 to 94, LCP skyrocketed to 3.0s.

Is it possible to prevent this with JS lazyload? Open dedicated branch (lazyload).

## Make webp images

```
`for file in a/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
```
