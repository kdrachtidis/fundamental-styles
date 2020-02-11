module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['*.js', 'sources/**/*.html', 'sources/**/*.js', 'sources/**/*.json'],
                tasks: ['htmllint', 'htmlmin', 'jshint', 'uglify', 'minjson']
            }
        },
        htmlmin: {
            dist: {
                files: {
                    'docs/src/html/leftContainer.min.html': 'sources/structure/leftContainer.html',
                    'docs/src/html/leftSidebar.min.html': 'sources/structure/leftSidebar.html',
                    'docs/src/html/mainContainer.min.html': 'sources/structure/mainContainer.html',
                    'docs/src/html/rightContainer.min.html': 'sources/structure/rightContainer.html',
                    'docs/src/html/rightSidebar.min.html': 'sources/structure/rightSidebar.html',
                    'docs/src/html/shellBar.min.html': 'sources/structure/shellBar.html'
                }
            }
        },
        htmllint: {
            all: ['sources/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', '*.json', 'sources/**/*.js', 'sources/**/*.json'],
            options: {
                browser: true
            }
        },
        uglify: {
            buildScript: {
                src: ['sources/script/*.js'],
                dest: 'docs/src/js/script.min.js'
            }
        },
        minjson: {
            build: {
                files: {
                    'docs/data/leftSidebar.min.json': 'sources/content/leftSidebar.json',
                    'docs/data/leftContainer.min.json': 'sources/content/leftContainer.json',
                    'docs/data/mainContainer.min.json': 'sources/content/mainContainer.json',
                    'docs/data/rightContainer.min.json': 'sources/content/rightContainer.json',
                    'docs/data/rightSidebar.min.json': 'sources/content/rightSidebar.json'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-minjson');

    grunt.registerTask('default', ['htmllint', 'htmlmin', 'jshint', 'minjson', 'uglify', 'watch']);

};