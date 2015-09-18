global.$ = require('jquery/dist/jquery');
global.riot = require('riot');

//Notes for later:
// browserify:
//   libs:
//     src: ['src/vendor/jquery.js', 'underscore', 'backbone'],
//     dest: 'public/js/libs.min.js'
//     options:
//       alias: ['backbone:', 'underscore:']
//       shim:
//         jQuery:
//           path: 'src/vendor/jquery'
//           exports: '$'
//   home:
//     src: ['src/js/main-home.js']
//     dest: 'public/js/main-home.min.js'
//     options:
//       external: ['backbone', 'underscore']
