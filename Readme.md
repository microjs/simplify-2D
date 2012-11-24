
# simplify-2D

  simplify-2D is a high-performance JavaScript 2D polyline simplification library

## Installation

    $ component install microjs/simplify-2D

## API

  ```javascript
  simplify(points, tolerance, highQuality)
  ```

  Returns a simplified array of points

  - `points` - An array of points in the format: `{x: Number, y: Number}`
  - `tolerance` - Optional number (defaulting to 1) Affects the amount of simplification (in the same metric as the point coordinates).
  - `highQuality - Optional boolean (defaults to false) - Excludes distance-based preprocessing step which leads to higher quality but runs ~10-20 times slower.

## License

  MIT
