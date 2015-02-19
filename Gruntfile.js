module.exports = function(grunt) {

  grunt.initConfig({
    bower: {
      install: {
        // https://github.com/yatskevich/grunt-bower-task
        // just run 'grunt bower:install'
        options: {
          targetDir: './static/modules',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: true,
          bowerOptions: {}
        }
      }
    },
    watch: {
      scripts: {
        files: ['static/js/app/**/*.js', 'static/sass/**/*.scss', 'static/sass/**/*.scss'],
        tasks: ['jshint', 'sass', 'scsslint'],
        options: {
          spawn: false
        }
      }
    },
    jshint: {
      all: {
        src: ['static/js/app/**/*.js']
      }
    },
    sass: {                              
       dist: {                           
        options: {                       
          style: 'expanded'
        },
        files: {                         
          'static/css/main.css': 'static/sass/main.scss'
        }
      }
    },
    scsslint: {
      allFiles: [ 'static/sass/*.scss' ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-watch');
};