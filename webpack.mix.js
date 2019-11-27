let mix = require('laravel-mix');

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/shuffle-array.js',
    'js/shuffle-array.min.js'
  )
} else {
  mix.js(
    'src/shuffle-array.js',
    'js/shuffle-array.js'
  )
}
