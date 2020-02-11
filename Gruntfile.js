module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['*.js', 'docs/sources/**/*.html', 'docs/sources/**/*.js', 'docs/sources/**/*.json'],
                tasks: ['jshint', 'minjson','uglify', 'htmllint']
            }
        },
        htmllint: {
            all: ['docs/sources/html/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'package.json', 'docs/sources/**/*.js', 'docs/sources/**/*.json'],
            options: {
                browser: true
            }
        },
        uglify: {
            buildScript: {
                src: ['docs/sources/js/*.js'],
                dest: 'docs/script.min.js'
            }
        },
        minjson: {
            build: {
                files: { 'docs/data/leftContainerContent.min.json': 'docs/sources/json/leftContainerContent.json', 'docs/data/leftSidebarContent.min.json': 'docs/sources/json/leftSidebarContent.json', 'docs/data/ObjectContent.min.json': 'docs/sources/json/ObjectContent.json', 'docs/data/rightContainerContent.min.json': 'docs/sources/json/rightContainerContent.json', 'docs/data/rightSidebarContent.min.json': 'docs/sources/json/rightSidebarContent.json', 'docs/data/simpleFormContent.min.json': 'docs/sources/json/simpleFormContent.json' }
            }
        }
    });

    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-minjson');

    grunt.registerTask('default', ['jshint', 'minjson', 'uglify', 'watch']);

};