module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['*.js', 'docs/*.html', 'sources/**/*.html', 'sources/**/*.js', 'sources/**/*.json'],
                tasks: ['htmllint', 'htmlmin', 'jshint', 'uglify', 'minjson']
            }
        },
        htmlmin: {
            dist: {
                files: {
                    'docs/src/html/pageContainer.min.html': 'sources/structure/pageContainer.html',
                    'docs/src/html/sectionColumns.min.html': 'sources/structure/sectionColumns.html',
                    'docs/src/html/shellBar.min.html': 'sources/structure/static/shellBar.html',
                    'docs/src/html/footerBar.min.html': 'sources/structure/static/footerBar.html',
                    'docs/src/html/leftContainer.min.html': 'sources/structure/panels/leftContainer.html',
                    'docs/src/html/leftSidebar.min.html': 'sources/structure/panels/leftSidebar.html',
                    'docs/src/html/mainContainer.min.html': 'sources/structure/panels/mainContainer.html',
                    'docs/src/html/rightContainer.min.html': 'sources/structure/panels/rightContainer.html',
                    'docs/src/html/rightSidebar.min.html': 'sources/structure/panels/rightSidebar.html'
                }
            }
        },
        htmllint: {
            all: ['sources/**/*.html']
        },
        jshint: {
            files: ['*.js', '*.json', 'sources/**/*.js'],
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
                    'docs/src/json/ContentData.min.json': 'sources/content/ContentData.json'
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