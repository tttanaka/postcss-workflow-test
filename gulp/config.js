var dest  = './build';
var src   = './src';

module.exports = {

  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  css: {
    src: src + '/css/main.css',
    dest: dest + '/css',
    settings: {
      cssnext: {
        customProperties: true,
        colorFunction: true,
        customSelectors: true
      },
      autoprefixer: {
        browsers: [
          'last 2 version',
          'ie 8',
          'ie 9',
          'android 2.3',
          'android 4',
          'opera 12'
        ]
      }
    } //settings
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }

};
