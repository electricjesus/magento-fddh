module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: { separator: ';', sourceMap: true },    
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/app.js'
      }
    },

    uglify: {
      options: {
        sourceMap: true, sourceMapIncludeSources: true, sourceMapIn: 'dist/app.js.map'
      },
      dist: {
        files: {
          'dist/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    exec: {
      build_readme: {
          command: 'awk \'BEGIN{getline l < "dist/app.min.js"}/CHECKOUT_JS_UGLIFIED/{gsub("CHECKOUT_JS_UGLIFIED",l)}1\' README.template > README.md',
      }
    },
    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');    
  grunt.loadNpmTasks('grunt-exec');  

  grunt.registerTask('dist', ['concat','uglify']);  
  grunt.registerTask('default', ['dist','exec:build_readme']);

}
