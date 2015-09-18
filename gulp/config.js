var dest  = './build';
var src   = './src';

module.exports = {

  browserSync: {
    server: {
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
    src: src + '/images/**/*',
    dest: dest + '/images',
    settings: {
      optimizationLevel: 3, // default: 3
      progressive: false, // default: false
      interlaced: false, // default: false
      multipass: false, // default: false
      svgoPlugins: [{removeViewBox: false}],
      use: []
    }
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  },
  uglifyJs: {
    src: dest + '/js/main.js',
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
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/main.js',
      dest: dest + '/js',
      outputName: 'main.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      //require: []
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }, {
      entries: src + '/javascript/vendors.js',
      dest: dest + '/js',
      outputName: 'vendors.js',
      // list of externally available modules to exclude from the bundle
      //external: ['underscore'],
      //require: []
    }
    ]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }

};
