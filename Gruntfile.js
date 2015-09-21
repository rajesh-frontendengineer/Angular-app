/**
 * Created by rajesh veldandi on 9/10/2015.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'Angular-app/WebContent/scripts/app.min.js'

                    ]
                }]
            }
        },
        jshint: {
            all: [
                'WebContent/scripts/app.js',
                'WebContent/scripts/config.js' // All JS in the libs folder
            ]
        },
        //uglify: {
        //    js: {
        //        files : {
        //            'WebContent/scripts/app.min.js': 'WebContent/scripts/app.js'
        //        }
        //    }
        //},
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '.',
                        dest: 'scripts',
                        src: [
                            'img/{,*/}*.{webp,gif,jpg,png}'
                        ]
                    },
                    {
                        expand: true,
                        flatten: true,
                        cwd: '.',
                        dest: 'scripts/node_modules',
                        src: [
                            'node_modules/angular/angular.min.js',
                            'node_modules/angular-route/angular-route.min.js',
                            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                            'node_modules/angular-local-storage/src/angular-local-storage.js'
                        ],
                        filter: 'isFile'
                    }

                ]
            }
        }
    });

    //---------------------------------------Load Grunt Tasks

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Default task(s).
    grunt.registerTask('default', ['jshint','copy','clean']);

};