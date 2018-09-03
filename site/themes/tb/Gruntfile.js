module.exports = function (grunt) {
  require('time-grunt')(grunt); // Good to see how much it's taking
  
  // Load plugins
  [
    'grunt-contrib-clean',
    'grunt-contrib-watch',
    'grunt-contrib-sass',
    'grunt-contrib-requirejs',
    'grunt-contrib-uglify',
    'grunt-cache-bust',
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });
  
  // Setup tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Watch
    watch: {
      html: {
        files: ['templates/en-US/**/**/*'],
        options: {
          livereload: true,
        },
      },
      sass: {
        files: ['scss/**/**/*'],
        tasks: ['css'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ['js/**/**/*'],
        tasks: ['rjs']
      },
    },
    
    // Require JS
    requirejs: {
      compile: {
        options: {
          baseUrl: 'js/lib',
          mainConfigFile: 'js/lib/config.js',
          out: 'js/app.js',
          name: 'config',
          paths: {
            'jquery': 'empty:',
            'jqueryui': 'empty:',
            'jqueryuitouch': 'empty:',
            'sidr': 'empty:',
          }
        }
      }
    },

    // Uglify
    //uglify: {
    //  my_target: {
    //    files: {
    //      'js/app.min.js': ['js/dev/vendors/require.js', 'js/dev/app.js']
    //    }
    //  }
    //},

    // Sass
    sass: {
      dist: {
        //options: {
        //  // Neat has bourbon as dependency so, no need to specify it.
        //  loadPath: require('node-neat').includePaths,
        //  style: 'compressed',
        //  sourcemap: false // Sass is still generating sourcemaps!
        //},
        options: {
          style: 'compressed',
          sourcemap: false,
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    // Cache Bust
    cacheBust: {
      taskName: {
        options: {
            assets: ['css/**/*.css'],
            queryString: true
        },
        src: ['partials/head.html']
      }
    },
    
  });
  
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('rjs', ['requirejs']);
  grunt.registerTask('default',['watch']);
  grunt.registerTask('bust',['cacheBust']);

  grunt.registerTask('default', [
    'css',
    'rjs',
  ]);

  grunt.registerTask('compress', [
    'css',
    'rjs',
    //'uglify'
  ]);

  grunt.registerTask('bust', [
    'bust',
  ]);
  
};