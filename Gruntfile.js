/**
 * Created with JetBrains WebStorm.
 * User: Maksim
 * Date: 7/20/13
 * Time: 1:04 AM
 * To change this template use File | Settings | File Templates.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/stylesheets',
                    environment: 'development',
                    outputStyle: 'compressed'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('dev', ['jshint', 'clean compass']);
    grunt.registerTask('default', ['jshint', 'compass']);
};