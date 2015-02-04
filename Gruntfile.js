module.exports = function(grunt) {

  grunt.initConfig({
    bower: {
      install: {
        //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
        options: {
          targetDir: './static',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: true,
          bowerOptions: {}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
};