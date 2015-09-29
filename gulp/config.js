var dest  = './build';
var src   = './src';

// for production
var prod  = './dist';

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
        customSelectors: true,
        compress: false
      },
      rucksack: {
        fallbacks: false,
        autoprefixer: false
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
    src: src + '/images/**/*',
    dest: dest + '/images',
    prod: prod + '/images',
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
    dest: dest,
    prod: prod
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
      extensions: ['.coffee'],
      // list of modules to make require-able externally
      //require: []
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
    minifyCss: {
      src: dest + '/css/*.css',
      dest: prod + '/css',
      settings: {
        rename: {
          suffix: '.min'
        }
      }
    },
    uglifyJs: {
      src: dest + '/js/*.js',
      dest: prod + '/js',
      settings: {
        rename: {
          suffix: '.min'
        }
      }
    },
    images: {
      src: dest + '/images/**/*',
      dest: prod + '/images',
    },
    dest: prod
  }

};
