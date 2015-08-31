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
  minifyCss: {
    src: dest + '/css/main.css',
    dest: dest + '/css',
    settings: {
      rename: {
        suffix: '.min'
      }
    }
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  },
  uglifyJs: {
    src: src + '/javascript/main.js',
    dest: dest + '/js',
    settings: {
      rename: {
        suffix: '.min'
      }
    }
  },
  pluginsJs: {
    src: src + '/javascript/vendors/*.js',
    dest: dest + '/js',
    settings: {
      rename: {
        suffix: '.min'
      }
    }
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }

};
