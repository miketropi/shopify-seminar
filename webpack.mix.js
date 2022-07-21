const mix = require('laravel-mix');

mix
  .js('./src/main.js', 'assets/main.bundle.js')
  .sass('./src/scss/main.scss', 'main.bundle.css')
  .setPublicPath('assets');