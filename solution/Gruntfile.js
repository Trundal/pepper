module.exports = function(grunt) {

grunt.initConfig({

  sass: {
    dist: {
      files: {
          'assets/css/styles.css': 'assets/scss/styles.scss'
      }
    }
  },

  postcss: {
    options: {
      map: true,
      processors: [
        require('autoprefixer')({
          browsers: ['last 2 versions', 'ie >= 9']
        })
      ]
    },
    dist: {
      src: 'assets/css/styles.css'
    }
  },
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'assets/css',
        src: ['*.css', '!*.min.css'],
        dest: 'assets/css',
        ext: '.min.css'
      }]
    }
  },
  uglify: {
    my_target: {
      files: {
        'assets/js/scripts.min.js': ['assets/js/*.js']
      }
    }
  },
  copy: {
    main: {
      files: [
        {expand: true, src: ['index.html', 'assets/css/*.min.css', 'assets/js/*.min.js', 'assets/img/*'], dest: 'dist/', filter: 'isFile'}
      ],
    },
  },
  clean: {
    folder: ['dist/']
  },
  watch: {
    styles: {
      files: ['assets/sass/*.scss', 'assets/sass/common/*.scss'],
      tasks: ['sass','postcss']
    }
  }

});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');

grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'uglify']);
grunt.registerTask('dist-copy', ['clean', 'copy']);

};